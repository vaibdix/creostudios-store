import { Manrope, Urbanist } from "next/font/google";


import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import NextTopLoader from "nextjs-toploader";

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
          <NextTopLoader
            color="#f46e6f"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #f46e6f,0 0 5px #f46e6f"
            template='<div class="bar" role="bar"><div class="peg"></div></div>
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          {children}
          <CtaSection />
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
