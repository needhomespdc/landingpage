export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.needhomespdc.com";

export const NAV_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Careers", href: "/careers" },
    { label: "Partner with us", href: "/partner-with-us" },
    { label: "Contact Us", href: "/contact" },
  ],
  investment: [
    { label: "Fractional Ownership", href: "/investment/fractional-ownership" },
    { label: "Co-Development", href: "/investment/co-development" },
    { label: "Land Banking", href: "/investment/land-banking" },
    { label: "Outright Purchase", href: "/investment/outright-purchase" },
    { label: "Save to Own", href: "/investment/save-to-own" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faq" },
    { label: "How it works", href: "/how-it-works" },
  ],
} as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Careers", href: "/careers" },
    { label: "Partner with us", href: "/partner-with-us" },
    { label: "Contact Us", href: "/contact" },
  ],
  investment: [
    { label: "Fractional Ownership", href: "/investment/fractional-ownership" },
    { label: "Co-Development", href: "/investment/co-development" },
    { label: "Land Banking", href: "/investment/land-banking" },
    { label: "Outright Purchase", href: "/investment/outright-purchase" },
    { label: "Save to Own", href: "/investment/save-to-own" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faq" },
    { label: "How it works", href: "/how-it-works" },
  ],
} as const;

export const CONTACT = {
  phone: "+234 702 500 5857",
  email: "surport@needhomespdc.com",
  address: "9 Orchid Road, Lekki, Lagos",
  whatsapp: "https://wa.me/2347025005857",
  instagram: "https://instagram.com/needhomes",
  tiktok: "https://tiktok.com/@needhomes",
  linkedin: "https://linkedin.com/company/needhomes",
  youtube: "https://youtube.com/@needhomes",
};
