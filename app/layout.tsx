import type { Metadata } from "next";
import "app/styles/globals.css";
import Header from "app/components/Header";
import Footer from "app/components/Footer";
import Script from "next/script";
import { AnalyticsProvider } from "app/components/AnalyticsProvider";
import { Suspense } from "react"; // ✅ Add this
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';



export const metadata: Metadata = {
  title: {
    default:
      "Plastic Household Products Wholesaler & Supplier in Ahmedabad | Shree Deep Rekha Traders",
    template: "%s | Shree Deep Rekha Traders",
  },
  description:
    "Leading plastic household products supplier in Ahmedabad. Buy high-quality kitchen storage, plastic containers, cleaning supplies, and wholesale plastic items at the best prices.",
  keywords:
    "plastic household products, plastic supplier in Ahmedabad, kitchen storage containers, plastic wholesaler Gujarat, cleaning products supplier, buy plastic items online, home storage solutions, kitchen plasticware, wholesale plastic items India",
  openGraph: {
    title:
      "Best Plastic Household Products Supplier in Ahmedabad | Wholesale & Retail",
    description:
      "Find top-quality plastic household items, kitchen storage solutions, and cleaning products from Ahmedabad's best plastic wholesaler. Order in bulk at competitive prices!",
    url: "https://www.shreedeeprekhatraders.in",
    siteName: "Shree Deep Rekha Traders",
    images: [
      {
        url: "https://www.shreedeeprekhatraders.in/images/hero1.png",
        width: 1200,
        height: 630,
        alt: "Plastic Household Products Supplier in Ahmedabad",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.shreedeeprekhatraders.in/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mr. Dipak Jingar" />
        <meta name="application-name" content="Shree Deep Rekha Traders" />
        <meta name="site-name" content="Shree Deep Rekha Traders" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="manifest" href="/site.webmanifest" />

        <link
          rel="preload"
          href="/fonts/Poppins-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* ✅ Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shree Deep Rekha Traders",
              url: "https://www.shreedeeprekhatraders.in",
              logo: "https://www.shreedeeprekhatraders.in/images/logo.png",
              description:
                "Leading plastic household products supplier in Ahmedabad. Wholesale and retail plastic containers, kitchen storage, and cleaning products.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Near Rajiv Gandhi Bhavan, Memco Cross Road, Naroda Road",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                postalCode: "382345",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+919824541902",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.instagram.com/shree_deep_rekha_traders/",
                "https://wa.me/919824541902",
              ],
            }),
          }}
        />

        {/* ✅ Google Analytics Scripts */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-Y8JHHNNEV1`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y8JHHNNEV1');
            `,
          }}
        />
      </head>

      <body>
        <Header />
        {/* ✅ Wrap AnalyticsProvider in Suspense */}
        <Suspense fallback={null}>
          <AnalyticsProvider />
        </Suspense>
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
