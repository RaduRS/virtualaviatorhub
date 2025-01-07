"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { CheckboxProvider } from "@/context/CheckboxContext";
import "./globals.css";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function LayoutWithSidebar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showTopStrip, setShowTopStrip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTopStrip(true);
      } else {
        setShowTopStrip(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SidebarProvider>
      <CheckboxProvider>
        <AppSidebar />
        <main className="bg-neutral-100 antialiased w-full min-h-screen flex flex-col justify-between">
          <div
            className={`fixed z-50 w-full transition-all duration-300 ${
              showTopStrip ? "shadow-lg bg-neutral-100" : ""
            }`}
          >
            <SidebarTrigger />
          </div>
          {children}
          <Footer />
        </main>
      </CheckboxProvider>
    </SidebarProvider>
  );
}
