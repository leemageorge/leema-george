import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmartCursor from "@/components/SmartCursor";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Leema George | Web Developer in Kochi",
  description: "Building fast and modern SEO friendly Web Applications using React & Next.js ",
  keywords: ["Best Affordable web Hosting","Top Web Developer in Kochi","Frontend Developer in kochi", "Web Developer near me", "React Developer in kochi", "Custom Web Development in kochi"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter">
        <SmartCursor />
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}