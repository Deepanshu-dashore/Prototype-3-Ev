import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
  ),
  title: {
    default: "Ziko EV | Premium Electric Mobility",
    template: "%s | Ziko EV"
  },
  description: "Elite performance electric scooters engineered for high-velocity precision.",
  keywords: [
    "Ziko EV",
    "Electric Scooter",
    "E-Scooter",
    "Premium Electric Mobility",
    "Carbon Fiber Electric Scooter",
    "Performance E-Scooter"
  ],
  authors: [{ name: "Ziko EV Team" }],
  creator: "Ziko EV",
  publisher: "Ziko EV",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Ziko EV | Premium Electric Mobility",
    description: "Elite performance electric scooters engineered for high-velocity precision.",
    siteName: "Ziko EV",
    images: [
      {
        url: "/ziko_ev_og_banner.png",
        width: 1200,
        height: 630,
        alt: "Ziko EV - Premium Electric Mobility",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziko EV | Premium Electric Mobility",
    description: "Elite performance electric scooters engineered for high-velocity precision.",
    images: ["/ziko_ev_og_banner.png"],
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
          try {
            if (localStorage.theme === 'light') {
              document.documentElement.classList.remove('dark');
            } else {
              document.documentElement.classList.add('dark');
            }
          } catch (_) {}
        ` }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-primary font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
