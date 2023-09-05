import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Midjourney AI Images",
  description: "Midjourney AI Images for generating images using midjourney",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex flex-row justify-center items-center bg- text-white bg-[#1E293B] p-5 text-sm">
          <a href="#" className="nav-link">
            Midjourney AI Images
          </a>
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Midjourney AI Free
          </a>
          <a href="#" className="nav-link-logo">
            Midjourney AI Images
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
