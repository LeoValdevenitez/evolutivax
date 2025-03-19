"use client";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import ModeSwitcher from "../common/ModeSwitcher";
import { openMenu } from "@/utlis/toggleMenu";
export default function Header2({
  parentClass = "rainbow-header header-default header-left-align header-transparent header-sticky",
  btnClass = "btn-default btn-small round",
}) {
  return (
    <header className={parentClass}>
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-9 col-md-6 col-4 position-static">
            <div className="header-left d-flex">
              <div className="logo">
                <Link href={`/`}>
                  <Image
                    className="logo-light"
                    alt="evolutivax" 
                    src="/assets/images/logo/logo.png"
                    width={100}
                    height={100}
                  />
                  <Image
                    className="logo-dark"
                    alt="evolutivax"
                    src="/assets/images/logo/logo.png"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
              <nav className="mainmenu-nav d-none d-lg-block mx-auto">
                <ul className="mainmenu ">
                  <Nav />
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-8">
            <div className="header-right">
              {/* Start Mobile-Menu-Bar */}
              <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                <div className="hamberger">
                  <button onClick={openMenu} className="hamberger-button">
                    <i className="feather-menu" />
                  </button>
                </div>
              </div>

              {/* Start Switcher Area  */}
              <ModeSwitcher />
          
     
             
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
