import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import localfont from "next/font/local";
import { ClerkProvider } from '@clerk/nextjs'; // Ensure correct import

export const metadata: Metadata = {
  title: "Nike Website",
  description: "This is the Nike Ecommerce Website",
};

const helvetica = localfont({
  src: [
    {
      path: "./fonts/Helvetica.otf",
      weight: "600",
    },
  ],
  variable: "--font-helvetica",
});

// RootLayout must be synchronous
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider> 
      <html lang="en">
        <body className={`${helvetica.variable} antialiased`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}