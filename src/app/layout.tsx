import type { Metadata } from "next";
import { Amatic_SC, Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const amatic = Amatic_SC({ weight: ['400', '700'], subsets: ["latin"], variable: "--font-amatic" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Beauty Spa Jambiani | Traditional Wellness in Zanzibar",
  description: "A serene tropical sanctuary in Jambiani, Zanzibar. Experience traditional African therapies, organic herbal blends, hot stone massage, facials, and private wellness suites. Book via WhatsApp.",
  keywords: ["spa zanzibar", "massage jambiani", "wellness zanzibar", "beauty spa", "hot stone therapy", "african massage", "zanzibar spa"],
  authors: [{ name: "Beauty Spa Jambiani" }],
  creator: "Beauty Spa Jambiani",
  openGraph: {
    title: "Beauty Spa Jambiani | Traditional Wellness in Zanzibar",
    description: "Escape to a tropical sanctuary. Book massages, facials & wellness treatments in Jambiani, Zanzibar.",
    url: "https://beautyspa-jambiani.com",
    siteName: "Beauty Spa Jambiani",
    images: [{ url: "/assets/img/hero.jpeg", width: 1200, height: 630, alt: "Beauty Spa Jambiani" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty Spa Jambiani | Traditional Wellness in Zanzibar",
    description: "Escape to a tropical sanctuary. Book massages, facials & wellness treatments in Jambiani, Zanzibar.",
    images: ["/assets/img/hero.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "name": "Beauty Spa Jambiani",
  "alternateName": "Beauty Spa",
  "description": "A serene tropical sanctuary in Jambiani, Zanzibar offering traditional African therapies, organic herbal blends, hot stone massage, facials, and wellness treatments.",
  "url": "https://beautyspa-jambiani.com",
  "logo": "https://beautyspa-jambiani.com/favicon.svg",
  "image": "https://beautyspa-jambiani.com/assets/img/hero.jpeg",
  "telephone": "+255717126282",
  "email": "spaplaza2022@gmail.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jambiani Plaza",
    "addressLocality": "Jambiani",
    "addressRegion": "Zanzibar",
    "addressCountry": "TZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.3454,
    "longitude": 39.5383
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Spa Treatments",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Body Massage", "description": "Traditional African full body massage using warm spiced oils" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hot Stone Therapy", "description": "Deeply relaxing hot stone massage to ease muscle tension" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facial Treatment", "description": "Rejuvenating facials using organic herbal blends" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Private Wellness Suite", "description": "Exclusive private suite experience for couples and individuals" } }
    ]
  },
  "sameAs": ["https://wa.me/255717126282"],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+255717126282",
    "contactType": "reservations",
    "availableLanguage": ["English", "Swahili"]
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Private Wellness Suites", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Organic Products", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "WhatsApp Booking", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Traditional African Therapies", "value": true }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Material Symbols */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${amatic.variable} ${montserrat.variable} font-sans antialiased text-spa-dark bg-spa-light`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
