import Image from "next/image";
import React from "react";

export default function Aboutxx() {
  return (
    <div className="rainbow-tab-area rainbow-section-gap">
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
                <span className="theme-gradient">Companies About.</span>
              </h4>
              <h2 className="title w-600 mb--20">¿Quiénes somos?</h2>
              <p className="description b1">
                En <strong>Evolutivax </strong>, somos un equipo de expertos en
                ciencia de datos, ingeniería de software y gestión de sistemas.
                Nos especializamos en implementar soluciones avanzadas de data
                management para ayudar a las organizaciones a optimizar y
                aprovechar el potencial de sus datos.
              </p>
            </div>
          </div>
        </div>
        <div className="row row row--30 align-items-center">
          <div
            className="col-lg-5"
            data-sal="slide-right"
            data-sal-duration={700}
          >
            <video autoPlay loop muted className="img-fluid">
              <source src="/assets/images/logo/vx.mp4" type="video/mp4" />
              Tu navegador no soporta videos en MP4.
            </video>
          </div>
          <div
            className="col-lg-7 mt_md--40 mt_sm--40 order-2 order-lg-1"
            data-sal="slide-left"
            data-sal-duration={700}
          >
            <div className="rainbow-default-tab">
              <ul className="nav nav-tabs tab-button" id="myTab" role="tablist">
                <li className="nav-item tabs__tab" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Nuestra Filosofía
                  </button>
                </li>
                <li className="nav-item tabs__tab" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Lo que ofrecemos
                  </button>
                </li>
                <li className="nav-item tabs__tab" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Por qué elegirnos
                  </button>
                </li>
              </ul>
              <div
                className="rainbow-tab-content tab-content"
                id="myTabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <p>
                    Nuestro enfoque de "Evolutivax" es un proceso de mejora
                    continua y adaptación a las necesidades cambiantes del
                    negocio. Ayudamos a las empresas a implementar sistemas de
                    datos que crezcan y se ajusten conforme a sus necesidades,
                    siempre con un enfoque en la innovación y el futuro.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600 mt-4">
                    <li>
                      <strong>Gestión Eficiente de Datos:</strong>{" "}
                      Implementación de sistemas para almacenar y organizar
                      datos de manera segura.
                    </li>
                    <li>
                      <strong>Análisis Predictivo:</strong> Uso de análisis
                      avanzados para generar insights estratégicos a partir de
                      datos.
                    </li>
                    <li>
                      <strong>Automatización de Procesos:</strong> Optimización
                      de flujos de trabajo con soluciones automatizadas.
                    </li>
                    <li>
                      <strong>Consultoría Personalizada:</strong> Asesoría en
                      estrategias de data management para asegurar el
                      crecimiento del negocio.
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  En <strong>Evolutivax</strong>, no solo trabajamos con datos;
                  entendemos que cada conjunto de datos tiene el potencial de
                  cambiar el rumbo de tu empresa. Con nuestra experiencia y
                  pasión por la innovación, ayudamos a nuestros clientes a
                  avanzar hacia un futuro más eficiente, dinámico y enfocado en
                  el crecimiento.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}