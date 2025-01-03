import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import localfont from "next/font/local";

export const metadata: Metadata = {
  title: "Nike Website",
  description: "This website is for the submission of ui ux hackathon",
};

const helvetica = localfont({
  src:[
    {
      path: "./fonts/Helvetica.otf",
      weight: "600"
    }
  ],
  variable: "--font-helvetica"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={` ${helvetica} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>

    </html>
  );
}
