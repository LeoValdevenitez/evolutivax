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
                <h2 className="title w-600 mb--20">Preguntas frequentes</h2>
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
              ¿Qué servicios ofrece Binaria Digital?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExamplea"
          >
            <div className="accordion-body card-body">
              Binaria Digital ofrece servicios especializados en contabilidad, gestión fiscal, auditoría, y automatización de procesos financieros para empresas en Argentina. Nuestro objetivo es simplificar la gestión financiera y potenciar el crecimiento de nuestros clientes.
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
              ¿Cómo puedo contratar los servicios de Binaria Digital?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExamplea"
          >
            <div className="accordion-body card-body">
              Puedes contratar nuestros servicios contactándonos a través de nuestro formulario en la página web o enviando un correo a contacto@binariadigital.com. Nuestro equipo se comunicará contigo para entender tus necesidades y ofrecerte la mejor solución.
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
              ¿Binaria Digital trabaja con pequeñas empresas?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExamplea"
          >
            <div className="accordion-body card-body">
              Sí, en Binaria Digital trabajamos con empresas de todos los tamaños, incluidas pequeñas y medianas empresas. Diseñamos soluciones personalizadas para atender las necesidades específicas de cada cliente.
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
              ¿Binaria Digital ayuda con la automatización de procesos financieros?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExamplea"
          >
            <div className="accordion-body card-body">
              Sí, somos expertos en implementar soluciones tecnológicas para automatizar procesos financieros, lo que te permite ahorrar tiempo, reducir errores y enfocarte en hacer crecer tu negocio.
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
              ¿En qué regiones de Argentina ofrece servicios Binaria Digital?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExamplea"
          >
            <div className="accordion-body card-body">
              Binaria Digital ofrece servicios en todo el territorio argentino. Nuestro equipo está disponible para brindar soporte remoto o presencial según las necesidades del cliente.
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
