import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Infinity Synapses",
  description: "Infinity Crown Index — AI, Radio, Terminal, Gallery, Builder",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Script src="https://www-infinity4.github.io/Mint-For-Infinity/infinity-wallet-menu.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
