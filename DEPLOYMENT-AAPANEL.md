# Deploy NeedHomes Landing with aaPanel

Guide for deploying **only** the Next.js marketing site (`landing/`) on a VPS using [aaPanel](https://www.aapanel.com/).

**Assumes:** The NeedHomes backend API is already live (e.g. `https://api.needhomespdc.com/api`). This guide does not cover API, database, or Redis setup.

**Stack:** Next.js 15 (Node server) → Nginx reverse proxy → Let's Encrypt SSL

Example landing domain: `https://needhomespdc.com` or `https://www.needhomespdc.com`

This is **not** a static export. The site runs `next start` behind Nginx (server components, `/api/waitlist`, image optimization).

---

## 1. Server prerequisites

- Ubuntu 20.04 / 22.04 (or similar) VPS
- **2 GB RAM minimum** (4 GB safer for `npm run build`)
- Domain A record pointing at the server IP
- aaPanel installed and accessible
- SSH access

If aaPanel is not installed:

```bash
URL=https://www.aapanel.com/script/install_7.0_en.sh && curl -sSO $URL && bash install_7.0_en.sh
```

---

## 2. Install required software in aaPanel

Open **App Store** and install:

| Software | Purpose |
|----------|---------|
| **Nginx** | Reverse proxy + SSL |
| **Node.js Version Manager** | Run Next.js |
| **PM2 Manager** | Keep the site running after reboot |
| **Git** | Pull from the repo (or upload a ZIP) |

### Node.js version

1. Open **Node.js Version Manager**
2. Install **Node.js 20 LTS** (or newer)
3. Set it as the default

Verify over SSH:

```bash
node -v   # v20.x.x or newer
npm -v
```

If `node` is missing in SSH:

```bash
export PATH=/www/server/nodejs/v20.*/bin:$PATH
hash -r
node -v
```

---

## 3. Create the website in aaPanel

1. Go to **Website** → **Add site**
2. Set:
   - **Domain:** `needhomespdc.com` (add `www.needhomespdc.com` as an alias if needed)
   - **PHP:** none / pure static
3. Create the site

Nginx will proxy this domain to the Next.js process in a later step.

---

## 4. Get the landing code on the server

Suggested path:

```bash
mkdir -p /www/wwwroot/needhomes-landing
cd /www/wwwroot/needhomes-landing
```

### Option A — Git clone

If the repo is a monorepo, clone and use the `landing/` folder:

```bash
git clone <YOUR_REPO_URL> repo
cd repo/landing
ls package.json app next.config.ts
```

Or clone only what you need into the app root so `package.json` is directly in `/www/wwwroot/needhomes-landing`.

### Option B — Upload ZIP

1. Zip the `landing/` folder locally (exclude `node_modules`, `.next`, `.env*`)
2. Upload via aaPanel **Files**
3. Extract so `package.json` is in `/www/wwwroot/needhomes-landing`

The rest of this guide uses:

```text
/www/wwwroot/needhomes-landing
```

---

## 5. Environment variables

Point the landing site at your **existing** live API. Set these **before** `npm run build` — `NEXT_PUBLIC_*` values are baked in at build time.

```bash
cd /www/wwwroot/needhomes-landing
nano .env.production
```

```env
NEXT_PUBLIC_API_URL=https://api.needhomespdc.com/api
NEXT_PUBLIC_APP_URL=https://app.needhomespdc.com
```

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_API_URL` | Your live backend API base, **including** `/api` |
| `NEXT_PUBLIC_APP_URL` | Investor app URL used by CTAs |

Important:

- Do **not** point `NEXT_PUBLIC_API_URL` at this Next.js site
- Use your real live API URL (same one the mobile app and admin use)
- See `landing/.env.example` for reference

```bash
chmod 600 .env.production
```

---

## 6. Install dependencies and build

```bash
cd /www/wwwroot/needhomes-landing

npm ci
npm run build
```

A successful build creates `.next/`.

If the build is killed (`Killed`, exit 137), add swap or use a larger VPS:

```bash
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
```

---

## 7. Run the landing app with PM2

Use a local port that is **not** already taken by the API or other apps. Example: **3001**.

```bash
cd /www/wwwroot/needhomes-landing

pm2 start npm --name "needhomes-landing" -- start -- -H 127.0.0.1 -p 3001

pm2 save
pm2 startup
```

Useful commands:

```bash
pm2 status
pm2 logs needhomes-landing
pm2 restart needhomes-landing
curl -I http://127.0.0.1:3001
```

### Alternative: aaPanel Node Project

1. **Website** → **Node Project** → **Add Node project**
2. Project path: `/www/wwwroot/needhomes-landing`
3. Start command: `npm start -- -H 127.0.0.1 -p 3001`
4. Port: `3001`

Use **either** PM2 **or** aaPanel Node Project — not both on the same port.

Keep the app bound to `127.0.0.1`. Only Nginx should be public.

---

## 8. Reverse proxy with Nginx

1. **Website** → your landing site → **Settings** → **Reverse proxy**
2. **Add reverse proxy:**
   - **Proxy name:** `landing`
   - **Target URL:** `http://127.0.0.1:3001`
   - **Send domain:** `$host`
3. Save

Optional manual config (**Website** → **Config**):

```nginx
location / {
    proxy_pass http://127.0.0.1:3001;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

---

## 9. Enable SSL

1. **Website** → your site → **SSL**
2. **Let's Encrypt** → select your domain(s)
3. Enable **Force HTTPS**

DNS must already point at this server.

---

## 10. Firewall

Allow **80** and **443** publicly. Do **not** expose port **3001**.

Open the same ports in your cloud provider firewall if applicable.

---

## 11. Verify deployment

1. Open `https://needhomespdc.com` (or your domain)
2. Check home, investment pages, marketplace, contact, images
3. Featured properties load from the live API (browser Network tab → requests to `api.needhomespdc.com`)
4. Waitlist form works (`POST /api/waitlist` on this Next app)
5. Process health:

```bash
pm2 status
curl -I http://127.0.0.1:3001
curl -I https://needhomespdc.com
```

If marketplace data is empty, confirm `NEXT_PUBLIC_API_URL` was set before build and that the live API responds:

```bash
curl -I https://api.needhomespdc.com/api/health
```

---

## 12. Updating the landing site (redeploy)

```bash
cd /www/wwwroot/needhomes-landing

git pull
# or upload new files

npm ci
npm run build
pm2 restart needhomes-landing
```

Rebuild whenever you change `.env.production` or any `NEXT_PUBLIC_*` variable.

---

## 13. Optional deploy script

Save as `/www/wwwroot/needhomes-landing/deploy.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail

cd /www/wwwroot/needhomes-landing

git pull
npm ci
npm run build
pm2 restart needhomes-landing

echo "Landing deploy complete."
```

```bash
chmod +x deploy.sh
./deploy.sh
```

---

## Troubleshooting

| Issue | What to check |
|-------|----------------|
| 502 Bad Gateway | `pm2 status`, proxy port `3001`, `curl -I http://127.0.0.1:3001` |
| Old content after deploy | `npm run build` then `pm2 restart needhomes-landing` |
| Env vars not applied | Set `NEXT_PUBLIC_*` **before** build, then rebuild |
| Marketplace empty | `NEXT_PUBLIC_API_URL` points at live API; API health check passes |
| Build OOM | Add swap or more RAM |
| Port in use | Pick another port and update Nginx proxy target |

Logs:

```bash
pm2 logs needhomes-landing
tail -f /www/wwwlogs/needhomespdc.com.error.log
```

---

## Quick checklist

- [ ] Domain DNS → landing server IP  
- [ ] Nginx + Node 20 + PM2 installed  
- [ ] Landing code in `/www/wwwroot/needhomes-landing`  
- [ ] `.env.production` points at live API (`NEXT_PUBLIC_API_URL`)  
- [ ] `npm ci && npm run build` succeeded  
- [ ] PM2 running on `127.0.0.1:3001`  
- [ ] Nginx reverse proxy configured  
- [ ] SSL + Force HTTPS enabled  
- [ ] Site loads; marketplace pulls from live API  

---

## Related files

| File | Purpose |
|------|---------|
| `landing/.env.example` | Env reference |
| `landing/next.config.ts` | Cloudinary image allowlist |
