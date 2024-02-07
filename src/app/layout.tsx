import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Navbar } from "./components/partials/Navbar";
import LayoutGlob from "./components/partials/Layout";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={montserrat.className + " bg-blue-60"}>
        {" "}
        <LayoutGlob>{children}</LayoutGlob>
      </body>
    </html>
  );
}
