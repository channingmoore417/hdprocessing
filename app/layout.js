import { Bebas_Neue, DM_Sans } from "next/font/google";
import "@/styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import Script from "next/script";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata = {
  title: {
    default: "HD Processing — Payment Processing & Merchant Services in Lafayette, LA",
    template: "%s | HD Processing",
  },
  description:
    "Lafayette's local payment processing company. Credit card processing, POS systems, mobile payments, and ecommerce solutions for small businesses. No hidden fees. Local support.",
  metadataBase: new URL("https://hdprocessing.com"),
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "HD Processing",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <head>
        {/* GTM placeholder — owner will replace */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
