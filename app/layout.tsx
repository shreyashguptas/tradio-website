import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next" // Adding the package for Vercel Speed Insights
import { Analytics } from "@vercel/analytics/react" // Adding Web Analytics for Vercel

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Tradio",
  description: "Tracking Algo Portfolio Performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className} >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}