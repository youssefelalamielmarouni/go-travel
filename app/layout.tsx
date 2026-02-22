import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Go Travel - Explore the World with Us",
  description: "Discover unforgettable travel experiences with Go Travel. From hidden gems to iconic destinations, we curate personalized journeys that inspire and delight. Start your adventure today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-gray-100 min-h-screen flex flex-col"
      >
        <Navbar />
        
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
