
import Accordions from "@/components/evolutivax/Accordions";
import { BtnWhatsapp } from "@/components/evolutivax/BtnWhatsapp";
import Footer1 from "@/components/evolutivax/Footer1";
import Header2 from "@/components/evolutivax/Header2";
import Service2 from "@/components/evolutivax/Service";
import Herox from "@/components/evolutivax/Herox";
import Service from "@/components/evolutivax/Services";
import React from "react";
import Facts from "@/components/evolutivax/Facts";
import Brands from "@/components/evolutivax/Brands";


export const metadata = {
  title:
    "Evolutiva X",
  description: "Data Management",
};
export default function page() {
  

  return (
    <>    
    <Header2/>
    <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
    <Herox/>
    <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Service/>
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
    <Service2/>
    <Facts/>
    <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Brands/><br/><br/>
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
    <Accordions/>
    <BtnWhatsapp />
    <Footer1/>
    </>
  );
}
