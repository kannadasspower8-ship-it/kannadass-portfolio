import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://kannadass.online"),
  title: {
    default: "KANNADASS OS™ | AI Web Developer & Digital Growth Solutions",
    template: "%s | KANNADASS OS™",
  },
  description: "Transforming local businesses into digital brands. Futuristic portfolio of Kannadass T, AI Web Developer and SEO Expert.",
  keywords: ["AI Web Developer", "SEO Expert", "Digital Growth Solutions", "Kannadass T", "Local SEO", "Next.js Developer"],
  authors: [{ name: "Kannadass T", url: "https://kannadass.online" }],
  creator: "Kannadass T",
  publisher: "Kannadass T",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KANNADASS OS™ | AI Web Developer",
    description: "Transforming local businesses into digital brands through Next.js, Local SEO, and Growth Architecture.",
    url: "https://kannadass.online",
    siteName: "KANNADASS OS™",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KANNADASS OS™ Portfolio Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KANNADASS OS™ | AI Web Developer",
    description: "Transforming local businesses into digital brands.",
    creator: "@kannadass",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ]
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://kannadass.online/#person",
        "name": "Kannadass T",
        "jobTitle": "AI Web Developer & SEO Expert",
        "url": "https://kannadass.online",
        "sameAs": [
          "https://www.linkedin.com/in/kannadass",
          "https://github.com/kannadasspower8-ship-it"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://kannadass.online/#website",
        "url": "https://kannadass.online",
        "name": "KANNADASS OS™",
        "publisher": {
          "@id": "https://kannadass.online/#person"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://kannadass.online/#organization",
        "name": "Kannadass Digital Growth Solutions",
        "url": "https://kannadass.online",
        "logo": "https://kannadass.online/apple-touch-icon.png",
        "image": "https://kannadass.online/og-image.png",
        "description": "Transforming local businesses into digital brands.",
        "telephone": "+919790019660",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I provide AI-powered web development, local SEO optimization, and business growth architecture."
            }
          },
          {
            "@type": "Question",
            "name": "What is KANNADASS OS™?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "KANNADASS OS is the digital command center and portfolio of Kannadass T, showcasing futuristic enterprise-level web applications."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased bg-[#030712] text-slate-300 selection:bg-cyan-500/30`}
        suppressHydrationWarning
      >
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
