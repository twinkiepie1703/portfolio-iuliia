import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Nothing_You_Could_Do } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-cormorant" 
});
const handwritten = Nothing_You_Could_Do({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwritten"
});

export const metadata: Metadata = {
  title: "Archive | Iuliia",
  description: "A personal archive of ideas, campaigns, experiences, and stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} ${handwritten.variable} bg-warm-ivory text-charcoal font-sans overflow-hidden selection:bg-dusty-pink selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
