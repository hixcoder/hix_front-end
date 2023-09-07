import "./styles/globals.css";
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
        <nav className="flex flex-row justify-between items-center  text-white bg-[#1E293B] p-8 text-sm w-screen">
          <div className="flex flex-row justify-center items-center">
            <img
              src="icon.jpg"
              alt="midjourney logo"
              className="w-9 rounded-md h-full align-middle border-red-50 border-2 mr-3"
            />
            <a href="#" className="nav-link-logo">
              Midjourney AI Images
            </a>
          </div>
          <div className="flex flex-row justify-center items-start">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Midjourney AI Images
            </a>
            <a href="#" className="nav-link">
              Midjourney AI Free
            </a>
          </div>

          <div className="flex flex-row justify-center items-end">
            <a href="#" className="nav-link2">
              English
            </a>
            <a href="#" className="nav-link2">
              Sign In
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
