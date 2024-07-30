import { Prompt } from "next/font/google";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navber";
import BootstrapClient from "./components/BootstrapClient";
import Footer from "./components/Footer"

const prompt = Prompt({ weight: ['400','700'], subsets: ['latin']})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={prompt.className}>
      <Navbar />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
