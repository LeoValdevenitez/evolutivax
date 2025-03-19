import Footer1 from "@/components/evolutivax/Footer1";
import React from "react";
import Header2 from "@/components/evolutivax/Header2";
import Hero1 from "@/components/evolutivax/Hero1";
import Aboutxx from "@/components/evolutivax/aboutxx";


export const metadata = {
  title: "Quiene somos",
  description: "",
};
export default function page() {
  return (
    <>
      <Header2 parentClass="rainbow-header header-default header-transparent header-sticky" />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>

      <Hero1 />
      <Aboutxx />

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      <Footer1 />
    </>
  );
}
