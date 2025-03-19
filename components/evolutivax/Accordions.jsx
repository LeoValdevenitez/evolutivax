import React from "react";

export default function Accordions() {
  return (
<div className="main-content">
  {/* Start Accordion-1 Area  */}
  <div className="rainbow-accordion-area rainbow-section-gap">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div
            className="section-title text-center"
            data-sal="slide-up"
            data-sal-duration={700}
            data-sal-delay={100}
          >
            <h4 className="subtitle">
              <span className="theme-gradient"></span>
            </h4>
            <h2 className="title w-600 mb--20">Preguntas Frecuentes</h2>
          </div>
        </div>
      </div>
      <div className="row mt--35 row--20">
        <div className="col-lg-10 offset-lg-1">
          <div className="rainbow-accordion-style accordion">
            <div className="accordion" id="accordionExamplea">
              <div className="accordion-item card">
                <h2 className="accordion-header card-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    ¿Qué servicios ofrece Evolutivax?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExamplea"
                >
                  <div className="accordion-body card-body">
                    Evolutivax brinda soluciones en gestión de datos, inteligencia artificial, ingeniería de software, big data y automatización de procesos para optimizar la toma de decisiones y mejorar la eficiencia operativa.
                  </div>
                </div>
              </div>
              <div className="accordion-item card">
                <h2 className="accordion-header card-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    ¿Cómo pueden ayudarme en la gestión de datos?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExamplea"
                >
                  <div className="accordion-body card-body">
                    Analizamos, estructuramos y optimizamos bases de datos para asegurar que la información clave esté disponible en tiempo real y mejorar el rendimiento empresarial.
                  </div>
                </div>
              </div>
              <div className="accordion-item card">
                <h2 className="accordion-header card-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    ¿Evolutivax ofrece soluciones con inteligencia artificial?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExamplea"
                >
                  <div className="accordion-body card-body">
                    Sí, diseñamos e implementamos modelos de IA para optimizar procesos, automatizar tareas y mejorar la toma de decisiones mediante análisis predictivos.
                  </div>
                </div>
              </div>
              <div className="accordion-item card">
                <h2 className="accordion-header card-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    ¿Cómo puedo contratar los servicios de Evolutivax?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExamplea"
                >
                  <div className="accordion-body card-body">
                    Puedes contactarnos a través de nuestra web, correo electrónico o redes sociales. Nuestro equipo te asesorará para encontrar la mejor solución para tu empresa.
                  </div>
                </div>
              </div>
              <div className="accordion-item card">
                <h2 className="accordion-header card-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    ¿Evolutivax trabaja con pequeñas y medianas empresas?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExamplea"
                >
                  <div className="accordion-body card-body">
                    Sí, nuestros servicios están diseñados para empresas de todos los tamaños. Adaptamos cada solución a las necesidades y presupuesto de cada cliente.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Accordion-1 Area  */}
</div>

  );
}
