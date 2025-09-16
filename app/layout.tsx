
import "./globals.css";
import Head from "next/head";

import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "EdVenture Park - India's First Student Startup Incubator",
  description:
    "EdVenture Park is India’s First and Favourite Student Focused non-academic startup incubator. We work with idea stage student startups coming from tier 2 & 3 colleges of Telangana..",
  keywords:
    "student startup incubator, early-stage startups, startup mentorship, pre-incubation, EdVenture Park, Indian startups, student entrepreneurs, Founders' Friday, startup ecosystem, Builders' Sunday, startup support programs, EdVenture Park Hyderabad",
  authors: [{ name: "EdVenture Park", url: "https://www.edventurepark.com" }],
  creator: "EdVenture Park",
  publisher: "EdVenture Park",
  applicationName: "EdVenture Park",
  category: "Startup Incubation",
  metadataBase: new URL("https://www.edventurepark.com"),
  alternates: {
    canonical: "https://www.edventurepark.com",
  },

  openGraph: {
    title: "EdVenture Park - India's First Student Startup Incubator",
    description:
      "Join India's most vibrant student-focused startup incubator. EdVenture Park supports student entrepreneurs through pre-incubation, events, and mentorship.",
    url: "https://www.edventurepark.com",
    siteName: "EdVenture Park",
    type: "website",
    images: [
      {
        url: "https://www.edventurepark.com/assets/evp-banner.png",
        width: 1200,
        height: 630,
        alt: "EdVenture Park Student Startup Incubator Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EdVenture Park - Empowering Student Startups in India",
    description:
      "Turn your idea into a real venture. Apply to EdVenture Park's 4-month pre-incubation program for student startups.",
    site: "@EdventurePark",
    creator: "@EdventurePark",
    images: ["https://www.edventurepark.com/assets/evp-cover-photo.png"],
  },

  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EdVenture Park",
    url: "https://www.edventurepark.com",
    logo: "https://www.edventurepark.com/assets/evp-logo.jpeg",
    description:
      "EdVenture Park is India’s First and Favourite Student Focused non-academic startup incubator. We work with idea stage student startups coming from tier 2 & 3 colleges of Telangana..",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "contact@edventurepark.com",
      telephone: "+91-XXXXXXXXXX",
      areaServed: "IN",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.facebook.com/EdVenP",
      "https://twitter.com/EdventurePark",
      "https://www.instagram.com/edventurepark",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500084",
      addressCountry: "India",
    },
    image: "https://www.edventurepark.com/assets/evp-services.jpg",
    developer: {
      "@type": "Person",
      name: "Syed Adnan Ali",
      url: "https://www.linkedin.com/in/syedadnanali99",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden" data-theme="light" style={{ colorScheme: "light" }}>
      <Head>
        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta property="og:image:width" content={`${metadata.openGraph.images[0].width}`} />
        <meta property="og:image:height" content={`${metadata.openGraph.images[0].height}`} />
        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        {/* SEO Essentials */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.alternates?.canonical} />
      </Head>
      <body className="max-w-full overflow-x-hidden antialiased">
        <ThemeProvider 
          attribute="data-theme" 
          defaultTheme="light" 
          enableSystem={false} 
          forcedTheme="light"
        >
          <div className="max-w-full overflow-x-hidden">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}