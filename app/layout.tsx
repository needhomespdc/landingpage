import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import NextTopLoader from "nextjs-toploader";
import { ReduxProvider } from '@/providers/ReduxProvider';
import { LdrsProvider } from '@/providers/LdrsProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import WhatsappFloater from '@/components/layout/WhatsappFloater';
import './globals.css';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'NeedHomes — Your Smooth Journey to Property Ownership',
    template: '%s | NeedHomes',
  },
  description: 'NeedHomes is a PropTech-enabled real estate investment platform focused on affordable housing, through co-development and fractional ownership that enables individual home buyers and Corporate investors to invest, discover, promote and earn returns on their investments.',
  keywords: ['real estate Nigeria', 'fractional ownership Nigeria', 'proptech Africa', 'invest real estate Lagos', 'co-development', 'land banking'],
  openGraph: {
    title: 'NeedHomes — Your Smooth Journey to Property Ownership',
    description: 'Invest in Nigerian real estate through co-development, fractional ownership, land banking, and more.',
    siteName: 'NeedHomes',
    type: 'website',
    locale: 'en_NG',
  },
  robots: { index: true, follow: true },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
  			<NextTopLoader height={4} speed={500} color="#b3b3b3" showSpinner={true} />

        <ReduxProvider>
          <LdrsProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LdrsProvider>
        </ReduxProvider>

        <WhatsappFloater />
      </body>
    </html>
  );
}
