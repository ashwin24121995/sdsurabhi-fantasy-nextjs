import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SDSURABHI - Free Fantasy Cricket | 100% Free, No Real Money",
  description: "India's most trusted FREE fantasy cricket platform. Play fantasy cricket for free, test your skills, and compete with friends. No real money involved. 18+ only.",
  keywords: "free fantasy cricket, fantasy cricket india, skill based gaming, no real money, cricket game, fantasy sports",
  openGraph: {
    title: "SDSURABHI - Free Fantasy Cricket",
    description: "Play fantasy cricket for FREE. No real money involved. Test your cricket knowledge!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.webp" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="pt-[120px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
