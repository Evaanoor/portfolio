import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import ThemeProvider from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "Eva's Portfolio",
  description: "Junior Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
        <ThemeProvider>
          <Navbar /> 
          <div className="pt-24">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}