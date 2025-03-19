import Link from "next/link";
import TyperComponent from "@/components/common/TyperComponent";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="slider-area slider-style-1 bg-transparent height-950">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pt-5">
            <div className="inner text-center">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  className="logo-dark"
                  alt="Corporate Logo"
                  src="/assets/images/logo/logo-light.svg"
                  width={1000}
                  height={400}
                />
                <Image
                  className="logo-light"
                  alt="Corporate Logo"
                  src="/assets/images/logo/logo-dark.svg"
                  width={1000}
                  height={400}
                />
              </div>
           <span className="header-caption">
                <span className="cd-headline clip is-full-width">
                  <TyperComponent
                    strings={["Análisis", "Optimización", "Automatización"]}
                  />
                </span>
              </span>
              <p className="description">
                Brindamos soluciones para que nuestros clientes tengan acceso
                preciso y en tiempo real a todos los datos de su empresa, tanto
                administrativos como operativos.
              </p>
              <div className="button-group">
                <Link
                  className="btn-default btn-medium round btn-icon"
                  href="/contact"
                >
                  Consultar <i className="icon feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
