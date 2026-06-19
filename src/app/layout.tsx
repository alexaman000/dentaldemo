import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions/FloatingActions";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Dentist in Godadara | KRISHNA DENTAL CARE & IMPLANT CENTER",
  description: "Advanced Dental Treatments, Dental Implants, Cosmetic Dentistry, Root Canal Treatment & Complete Oral Care in Surat.",
  openGraph: {
    title: "KRISHNA DENTAL CARE & IMPLANT CENTER",
    description: "Creating Healthy Smiles with Advanced Dental Care.",
    url: "https://krishnadentalcare.com",
    siteName: "Krishna Dental Care & Implant Center",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
