import { Manrope, Urbanist } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";
import CtaSection from "@/components/CtaSection";

const font = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "CreoStudios-store",
  description: "Store - The place for all your purchases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          <ToastProvider />
          <ModalProvider />
          <Navbar />
          {children}
          <CtaSection />
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
