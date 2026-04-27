import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
   display: "swap", 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
   display: "swap", 
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mertdev.com'), // TODO: Domain aldıktan sonra değiştir
  title: "Mert | Full Stack Developer",
  description: "Full Stack Developer & Computer Engineer from Turkey. Building modern, scalable web and mobile applications with React, Next.js, TypeScript, and Laravel.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Laravel", "Web Developer", "Mobile Developer", "Portfolio"],
  authors: [{ name: "Mert" }],

  // OpenGraph meta tags (Social media preview)
  openGraph: {
    title: "Mert - Full Stack Developer Portfolio",
    description: "Building modern, scalable web & mobile applications with React, Next.js, TypeScript, and Laravel",
    url: "https://devmert.com", // TODO: Domain aldıktan sonra değiştir
    siteName: "Mert Portfolio",
    images: [
      {
        url: "/og-image.png", // TODO: OG image oluştur (1200x630px)
        width: 1200,
        height: 630,
        alt: "Mert - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card meta tags
  twitter: {
    card: "summary_large_image",
    title: "Mert - Full Stack Developer",
    description: "Building modern web & mobile apps with React, Next.js, TypeScript",
    images: ["/og-image.png"], // TODO: OG image oluştur
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mert",
    "jobTitle": "Full Stack Developer",
    "description": "Computer Engineer from Turkey, specialized in React, Next.js, TypeScript, and Laravel development",
    "url": "https://DOMAIN.com", // TODO: Domain değiştir
    "image": "https://DOMAIN.com/og-image.png",
    "sameAs": [
      "https://github.com/Merttnkt",
      "https://www.linkedin.com/in/mert-tankit"
    ],
    "knowsAbout": ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS", "Laravel", "Supabase", "Docker", "Git"]
  };

  return (
    <html lang="en" translate="no" style={{ overscrollBehavior: "none" }}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f1117]`}
  style={{ overscrollBehavior: "none", touchAction: "pan-x pan-y" }}
>
        {children}
        
      </body>
    </html>
  );
}
