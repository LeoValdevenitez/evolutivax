import { countersData, countersData2 } from "@/data/facts";
import React from "react";
import CounterComponent from "../common/Counter";

export default function Counter() {
  return (
    <div className="main-content">
      {/* Start Main Counter up-1 Area  */}
      <div className="rainbow-counterup-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Nuestra presencia</span>
                </h4>
                <h2 className="title w-600 mb--20">Tenemos el privilegio de trabajar y participar</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {countersData2.map((elm, i) => (
              <div
                key={i}
                className="col-lg-3 col-md-6 col-sm-6 col-12"
                data-sal="slide-up"
                data-sal-duration={700}
              >
                <div className="count-box counter-style-1 text-center">
                  <div>
                    <div className="count-number">
                      <span className="counter">
                        <CounterComponent max={elm.number}  />+
                      </span>
                    </div>
                  </div>
                  <h5 className="title">{elm.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
   
   
     
    </div>
  );
}
