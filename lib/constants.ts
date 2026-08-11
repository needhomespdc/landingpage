export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.needhomespdc.com";

export const BLOG_URL = "https://blog.needhomes.ng";

export const NAV_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Partner with us", href: "/partner-with-us" },
  ],
  investment: [
    { label: "Fractional Ownership", href: "/investment/fractional-ownership" },
    { label: "Co-Development", href: "/investment/co-development" },
    { label: "Land Banking", href: "/investment/land-banking" },
    { label: "Outright Purchase", href: "/investment/outright-purchase" },
    { label: "Save to Own", href: "/investment/save-to-own" },
  ],
} as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Partner with us", href: "/partner-with-us" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Contact Us", href: "/contact" },
  ],
  investment: [
    { label: "Fractional Ownership", href: "/investment/fractional-ownership" },
    { label: "Co-Development", href: "/investment/co-development" },
    { label: "Land Banking", href: "/investment/land-banking" },
    { label: "Outright Purchase", href: "/investment/outright-purchase" },
    { label: "Save to Own", href: "/investment/save-to-own" },
  ],
} as const;

export const CONTACT = {
  phone: "+234 702 500 5857",
  email: "surport@needhomespdc.com",
  address: "9 Orchid Road, Lekki, Lagos",
  whatsapp: "https://wa.me/2347025005857",
  whatsappCommunity: "https://chat.whatsapp.com/EF4SScZAhuj5KhGyJSKCG0",
  instagram: "https://instagram.com/needhomes",
  tiktok: "https://tiktok.com/@needhomes",
  linkedin: "https://linkedin.com/company/needhomes",
  youtube: "https://youtube.com/@needhomes",
};
