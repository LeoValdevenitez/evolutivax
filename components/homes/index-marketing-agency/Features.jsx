import React from "react";
import Image from "next/image";
export default function Features() {
  return (
    <div className="rainbow-advance-tab-area rainbow-section-gap">
      <div className="container">
        <div className="row mb--40">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Nuestras Servicios</span>
              </h4>
              <h2 className="title w-600 mb--20 pt-5 mb-3">
              En Binaria, ofrecemos soluciones contables integrales para que tu empresa crezca de manera sólida y segura.
              </h2>
             <br/>
              <p className="description b1">
              Contamos con un equipo especializado que te asesorará en cada paso, garantizando el cumplimiento de las normativas fiscales y optimizando la gestión financiera de tu Empresa. Nuestro enfoque está en brindarte tranquilidad y resultados efectivos.
             
              </p>
           
       
            </div>
          </div>
        </div>
        <div className="html-tabs">
          <div className="row row--30">
            <div className="order-2 order-lg-1 col-lg-4 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30">
              <div className="advance-tab-button advance-tab-button-1">
                <ul
                  className="nav nav-tabs tab-button-list"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link tab-button active"
                      id="tabA-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tabA"
                      href="#"
                      role="tab"
                      aria-controls="tabA"
                      aria-selected="true"
                    >
                      <h4 className="title">Planificación Fiscal</h4>
                      <p className="description">
                      Desarrollamos estrategias fiscales a medida para minimizar tus cargas impositivas.
                      </p>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link tab-button"
                      id="tabB-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tabB"
                      href="#"
                      role="tab"
                      aria-controls="tabB"
                      aria-selected="false"
                    >
                      <h4 className="title">Asesoramiento Contable</h4>
                      <p className="description">
                      Te brindamos un asesoramiento continuo en todas tus necesidades contables.
                      </p>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link tab-button"
                      id="tabC-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tabC"
                      href="#"
                      role="tab"
                      aria-controls="tabC"
                      aria-selected="false"
                    >
                      <h4 className="title">Impuestos</h4>
                      <p className="description">
                      Gestionamos todas las obligaciones impositivas de tu empresa, asegurando presentaciones.
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 order-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show advance-tab-content-1 active"
                  id="tabA"
                  role="tabpanel"
                  aria-labelledby="tabA-tab"
                >
                  <div className="thumbnail">
                    <Image
                      alt="advance-tab-image"
                      src="/assets/images/binaria/paso6.png"
                      width={1000}
                      height={720}
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade advance-tab-content-1"
                  id="tabB"
                  role="tabpanel"
                  aria-labelledby="tabB-tab"
                >
                  <div className="thumbnail">
                    <Image
                      alt="advance-tab-image"
                      src="/assets/images/binaria/paso5.png"
                      width={1000}
                      height={720}
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade advance-tab-content-1"
                  id="tabC"
                  role="tabpanel"
                  aria-labelledby="tabC-tab"
                >
                  <div className="thumbnail">
                    <Image
                      alt="advance-tab-image"
                      src="/assets/images/binaria/paso3.jpg"
                      width={1000}
                      height={720}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
