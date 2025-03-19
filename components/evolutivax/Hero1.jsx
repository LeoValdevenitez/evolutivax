import React from "react";

export default function Hero1() {
  return (
    <div
      className="slider-area slider-style-1 variation-default height-850 bg_image bg_image--12"
      data-black-overlay={7}
    >

      <div className="container ">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="inner pt--80 text-center"
              data-sal="slide-up"
              data-sal-duration={400}
              data-sal-delay={150}
            >
              <h1 className="title display-two">Equipo Experto</h1>
              <h2 className="title display-one">
                Nuestro equipo está compuesto por profesionales con amplia
                experiencia.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
