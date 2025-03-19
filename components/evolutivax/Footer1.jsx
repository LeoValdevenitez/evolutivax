import React from "react";
import Link from "next/link";
import { socialLinksWithSal } from "@/data/footerLinks";
export default function Footer1() {
  return (
    <div className="footer-style-3">
      <div className="rainbow-callto-action rainbow-call-to-action style-8 content-wrapper">
        <div className="container">
          <div className="row row--0 align-items-center">
            <div className="col-lg-12">
              <div className="inner">
                <div className="content text-center">
                  <h2 className="title">Estas listo para comenzar</h2>
                  <h6 className="subtitle">La mejor opción para Empresas.</h6>
                  <div className="call-to-btn text-center mt--30">
                    <Link className="btn-default btn-icon" href="/contact">
                      Consultar <i className="icon feather-arrow-right"> </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area copyright-style-one variation-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-7 col-sm-12 col-12">
              <div className="copyright-left">
                <ul className="ft-menu link-hover">
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 mt_sm--20">
              <div className="copyright-center text-center">
                powered by{" "}
                <Link  className="" href="https://www.linkedin.com/in/leonardo-valdevenitez-8603b6219/">
                  ValDev
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--20 mt_sm--20">
              <div className="copyright-right text-center text-lg-end">
                <p className="copyright-text">
                  2025 ©{" "}
                  <Link  className="" href="/" target="_blank">
                    Evolutivax
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
