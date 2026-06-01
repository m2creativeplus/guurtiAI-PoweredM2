import type React from "react"
import type { Metadata } from "next"
import { Lexend_Deca, Krub, Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AccessibilityToolbar } from "@/components/accessibility-toolbar"
import { ConvexClientProvider } from "@/components/ConvexClientProvider"
import "./globals.css"

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const krub = Krub({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Golaha Guurtida | House of Elders — Republic of Somaliland",
    template: "%s | Golaha Guurtida — Republic of Somaliland",
  },
  description:
    "Official digital platform of the Golaha Guurtida (House of Elders), the upper legislative chamber of the Republic of Somaliland. Established 1991 | Hargeisa, Somaliland.",
  keywords: [
    "Golaha Guurtida",
    "House of Elders Somaliland",
    "Republic of Somaliland Parliament",
    "Somaliland Legislature",
    "Somaliland Democracy",
    "Guurti",
    "Somaliland Government",
    "Hargeisa",
    "External Partnerships Department EPD",
  ],
  authors: [{ name: "Golaha Guurtida — External Partnerships Department" }],
  creator: "Golaha Guurtida, Republic of Somaliland",
  publisher: "Golaha Guurtida, Republic of Somaliland",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://guurtiai-powered-m2.vercel.app",
    siteName: "Golaha Guurtida — House of Elders, Republic of Somaliland",
    title: "Golaha Guurtida | House of Elders — Republic of Somaliland",
    description:
      "The Golaha Guurtida is the upper legislative chamber of the Republic of Somaliland, established in 1991. This platform supports the External Partnerships Department (EPD) mandate.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golaha Guurtida | House of Elders — Republic of Somaliland",
    description: "Official EPD Intelligence & Parliamentary Governance Platform of the Golaha Guurtida.",
  },
  metadataBase: new URL("https://guurtiai-powered-m2.vercel.app"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="so" suppressHydrationWarning className={`${lexendDeca.variable} ${krub.variable} ${cairo.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const isDark = theme === 'dark' || (!theme && prefersDark);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ConvexClientProvider>
          {children}
          <AccessibilityToolbar />
          <Analytics />
        </ConvexClientProvider>
      </body>
    </html>
  )
}
