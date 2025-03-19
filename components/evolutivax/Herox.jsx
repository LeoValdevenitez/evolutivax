import React from "react";
import Image from "next/image";
import Link from "next/link";
import TyperComponent from "@/components/common/TyperComponent";
export default function Hero() {
  return (
    <div className="slider-area slider-style-1 bg-transparent variation-2 height-850">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-2 order-lg-1 mt_md--40 mt_sm--40">
            <div className="inner text-left">

                <Image
                  className="logo-dark"
                  alt="Corporate Logo"
                  src="/assets/images/logo/logo-dar.svg"
                  width={1000}
                  height={400}
                />
                <Image
                  className="logo-light"
                  alt="Corporate Logo"
                  src="/assets/images/logo/logo-lig.svg"
                  width={1000}
                  height={400}
                />
          
      <br/><br/>
           <span className="">
                <span className="cd-headline clip ">
                  <TyperComponent
                    strings={["Análisis", "Optimización", "Automatización"]}
                  />
                </span>
              </span>
              <p className="description">
              En Evolutivax, ofrecemos soluciones personalizadas en gestión de datos, desarrollo tecnológico y consultoría contable.
              </p>
              <div className="button-group">
                <Link
                  className="btn-default btn-medium  btn-icon"
                  href="/contact"
                >
                  Consultar <i className="icon feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-1 order-lg-2  mx-auto">
            <div className="thumbnail">
            <Image
                 
                  alt="Corporate Logo"
                  src="/assets/images/logo/X.png"
                  width={1000}
                  height={1000}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
