import Link from "next/link";
import TyperComponent from "@/components/common/TyperComponent";

export default function Hero() {
  return (
    <div className="slider-area slider-style-1 bg-transparent height-950">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <h1 className="display-two">
                BINARIA DIGITAL
              </h1>
              <h2 className="text-muted"> CONTABILIDAD ONLINE</h2>
              <h2 className="display-two">
               
                <span className="header-caption theme-gradient">
                  <span className="cd-headline clip is-full-width">
                    <TyperComponent />
                  </span>
                </span>
              </h2>
              <p className="description">
              Binaria es un estudio contable con una trayectoria sólida. Brindamos soluciones personalizadas a Empresas.
              </p>
              <div className="button-group">
                <a
                  className="btn-default btn-medium round btn-icon"
                  target="_blank"
                  href="#"
                >
                  Hablemos{" "}
                  <i className="icon feather-arrow-right"></i>
                </a>
      
              </div>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
