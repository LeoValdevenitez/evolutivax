"use client";
import { useEffect } from "react";
import "../public/assets/scss/main.scss";
import "react-modal-video/scss/modal-video.scss";
import "photoswipe/dist/photoswipe.css";
import { usePathname } from "next/navigation";
import sal from "sal.js";
import BackToTop from "@/components/common/BackToTop";
import MobileMenu from "@/components/headers/MobileMenu";
import { closeMenu } from "@/utlis/toggleMenu";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm");
    }
  }, []);

  useEffect(() => {
    sal({ threshold: 0.01, once: true });
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      document
        .querySelector(".header-sticky")
        ?.classList.toggle("sticky", window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isDarkmodeDefault = localStorage.setItem("isDarkmode", "false");
    const isDarkmode = localStorage.getItem("isDarkmode");
    document.body.classList.toggle("active-dark-mode", isDarkmode === "true");
    document.body.classList.toggle("active-light-mode", isDarkmode === "false");
  }, []);

  return (
    <html lang="en">
      <body className="active-dark-mode">
        <main className="page-wrapper">{children}</main>
        <MobileMenu />
        <BackToTop />
      </body>
    </html>
  );
}
