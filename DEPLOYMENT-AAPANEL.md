# Deploy NeedHomes Landing with aaPanel

Guide for deploying the Next.js landing site (`landing/`) on a VPS using [aaPanel](https://www.aapanel.com/).

**Stack:** Next.js 15 (Node server) → reverse proxy (Nginx) → SSL

---

## 1. Server prerequisites

- Ubuntu 20.04 / 22.04 (or similar) VPS
- Domain pointed to the server IP (A record), e.g. `needhomes.ng` or `www.needhomes.ng`
- aaPanel installed and accessible

If aaPanel is not installed yet:

```bash
URL=https://www.aapanel.com/script/install_7.0_en.sh && curl -sSO $URL && bash install_7.0_en.sh
```

---

## 2. Install required software in aaPanel

Open **App Store** and install:

| Software | Purpose |
|----------|---------|
| **Nginx** | Reverse proxy + SSL |
| **Node.js Version Manager** (or Node.js) | Run Next.js |
| **PM2 Manager** (optional but recommended) | Keep the app running |
| **Git** (via Softaculous / SSH) | Pull code from the repo |

### Node.js version

1. Open **Node.js Version Manager**
2. Install **Node.js 20 LTS** (or newer; project uses Next 15)
3. Set it as the default version

Verify over SSH:

```bash
node -v   # e.g. v20.x.x
npm -v
```

---

## 3. Create the website in aaPanel

1. Go to **Website** → **Add site**
2. Set:
   - **Domain:** your landing domain (e.g. `needhomes.ng`)
   - **Root directory:** leave default for now (Nginx will proxy to Node)
   - **PHP:** Pure static / none (not needed)
3. Create the site

You will reverse-proxy this site to the Next.js process in a later step.

---

## 4. Upload / clone the project

SSH into the server (or use aaPanel **Terminal**).

Suggested path:

```bash
mkdir -p /www/wwwroot/needhomes-landing
cd /www/wwwroot/needhomes-landing
```

### Option A — Git clone

```bash
git clone <YOUR_REPO_URL> .
# If the landing app lives in a monorepo subfolder:
# git clone <YOUR_REPO_URL> repo && cd repo/landing
```

### Option B — Upload ZIP

1. Zip the `landing/` folder locally (exclude `node_modules` and `.next`)
2. Upload via aaPanel **Files** to `/www/wwwroot/needhomes-landing`
3. Extract on the server

Ensure the directory that contains `package.json` is your app root (e.g. `/www/wwwroot/needhomes-landing`).

---

## 5. Configure environment variables

In the app root, create `.env.production` (or `.env.local`):

```bash
cd /www/wwwroot/needhomes-landing
nano .env.production
```

Example (adjust to your live URLs):

```env
NEXT_PUBLIC_API_URL=https://api.needhomes.ng/api
NEXT_PUBLIC_APP_URL=https://app.needhomespdc.com
```

Notes:

- `NEXT_PUBLIC_*` values are baked in at **build** time — set them **before** `npm run build`
- Do not point `NEXT_PUBLIC_API_URL` at the Next.js site itself; it must be the backend API base (including `/api`)

Protect the file:

```bash
chmod 600 .env.production
```

---

## 6. Install dependencies and build

```bash
cd /www/wwwroot/needhomes-landing

# Use the Node version managed by aaPanel if needed
# export PATH=/www/server/nodejs/v20.x.x/bin:$PATH

npm ci
# or: npm install

npm run build
```

A successful build creates the `.next/` folder.

---

## 7. Run the app with PM2

Choose a port that is free on the server (example: **3001**).

```bash
cd /www/wwwroot/needhomes-landing

# Start Next.js in production mode
pm2 start npm --name "needhomes-landing" -- start -- -p 3001

# Persist across reboots
pm2 save
pm2 startup
```

Useful PM2 commands:

```bash
pm2 status
pm2 logs needhomes-landing
pm2 restart needhomes-landing
```

### Alternative: aaPanel Node Project

1. **Website** → **Node Project** → **Add Node project**
2. Set:
   - Project path: `/www/wwwroot/needhomes-landing`
   - Startup file / command: `npm` with args `start -- -p 3001`  
     (or use `node_modules/next/dist/bin/next` with `start -p 3001`)
   - Port: `3001`
   - Package manager: npm
3. Run **Install** / **Build** if the UI offers it, then start the project

Either PM2 or aaPanel Node Project is fine — pick one, not both on the same port.

---

## 8. Reverse proxy with Nginx (aaPanel)

Point the website domain at the Node process.

1. **Website** → your site → **Settings** → **Reverse proxy**
2. **Add reverse proxy:**
   - **Proxy name:** `landing`
   - **Target URL:** `http://127.0.0.1:3001`
   - **Send domain:** `$host` (default is fine)
3. Save

### Optional: edit Nginx config manually

If you prefer raw config (**Website** → **Config**), a minimal proxy block looks like:

```nginx
location / {
    proxy_pass http://127.0.0.1:3001;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

Reload Nginx after changes (aaPanel does this when you save, or run `nginx -s reload`).

---

## 9. Enable SSL

1. **Website** → your site → **SSL**
2. Choose **Let's Encrypt**
3. Select the domain(s), apply, and enable **Force HTTPS**

Confirm DNS A records already point to this server before requesting the certificate.

---

## 10. Firewall / security group

Allow inbound:

| Port | Purpose |
|------|---------|
| 80 | HTTP (Let's Encrypt + redirect) |
| 443 | HTTPS |
| 22 | SSH |
| 8888 (or your aaPanel port) | Panel access — restrict by IP if possible |

Do **not** expose port `3001` publicly; only Nginx should reach it on localhost.

In aaPanel: **Security** → open 80/443. Also open the same ports on your cloud provider firewall (AWS / DigitalOcean / Contabo / etc.).

---

## 11. Verify deployment

1. Open `https://your-domain.com`
2. Check home, investment pages, marketplace, and images
3. Confirm API calls hit `NEXT_PUBLIC_API_URL` (browser Network tab)
4. Check process health:

```bash
pm2 status
curl -I http://127.0.0.1:3001
```

---

## 12. Updating the site (redeploy)

```bash
cd /www/wwwroot/needhomes-landing

git pull
# or upload new files

npm ci
npm run build
pm2 restart needhomes-landing
```

If you changed `.env.production` / any `NEXT_PUBLIC_*` variable, always rebuild before restarting.

---

## 13. Optional: simple deploy script

Save as `/www/wwwroot/needhomes-landing/deploy.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail

cd /www/wwwroot/needhomes-landing

git pull
npm ci
npm run build
pm2 restart needhomes-landing

echo "Deploy complete."
```

```bash
chmod +x deploy.sh
./deploy.sh
```

---

## Troubleshooting

| Issue | What to check |
|-------|----------------|
| 502 Bad Gateway | Is PM2/Node running? `pm2 status`. Is the proxy port correct (`3001`)? |
| Site shows old content | Rebuild (`npm run build`) then `pm2 restart` |
| Env vars ignored | `NEXT_PUBLIC_*` must be set **before** build |
| Images from Cloudinary fail | Confirm `res.cloudinary.com` is allowed (already in `next.config.ts`) |
| Permission errors | App files owned by a user Nginx/Node can read; avoid running as root long-term |
| Build OOM | Add swap or use a larger VPS; Next builds need enough RAM |

Logs:

```bash
pm2 logs needhomes-landing
# Nginx error log (path may vary):
tail -f /www/wwwlogs/your-domain.error.log
```

---

## Quick checklist

- [ ] Domain DNS → server IP  
- [ ] Nginx + Node 20 + PM2 installed in aaPanel  
- [ ] Code in `/www/wwwroot/needhomes-landing`  
- [ ] `.env.production` set  
- [ ] `npm ci && npm run build` succeeded  
- [ ] App running on `127.0.0.1:3001`  
- [ ] Reverse proxy configured  
- [ ] SSL + Force HTTPS enabled  
- [ ] Site loads over HTTPS  

---

## Related env reference

See `.env.example` in this folder:

```env
NEXT_PUBLIC_API_URL=https://api.needhomes.ng/api
NEXT_PUBLIC_APP_URL=https://app.needhomespdc.com
```
