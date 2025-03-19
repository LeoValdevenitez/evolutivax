"use client";
import React from "react";
import "./BtnWhatsapp.css";
import PropTypes from "prop-types";
import Image from "next/image";

const BtnWhatsapp = ({}) => {
  return (
    <div className="btnwhatsapp">
      <div className="btnCenter">
        <div className="d-none d-sm-none d-md-block text-end">
          <a
            href="https://web.whatsapp.com/send/?phone=%2B5492615345555&text=Buen+día+quiero+información&app_absent=0"
            target="_blank"
            className="menu-trigger"
          >
            <Image
              alt="Evolutivax"
              src="/assets/images/logo/logo-whatsapp.png"
			  style={{ borderRadius: "50px 50px" }}
              width={80}
              height={80}
            />
            
          </a>
        </div>
      </div>
      <div className="btnCenterMovil">
        <div className="d-sm-block d-md-none text-end">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B5492615345555&text=Buen+día+quiero+información&app_absent=0"
            target="_blank"
            className="menu-trigger"
          >
           <Image
              alt="Evolutivax"
              src="/assets/images/logo/logo-whatsapp.png"
			  style={{ borderRadius: "50px 50px" }}
              width={55}
              height={55}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

BtnWhatsapp.propTypes = {};

export default BtnWhatsapp;
