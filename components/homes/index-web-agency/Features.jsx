import { services } from "@/data/service";
import React from "react";

export default function Features() {
  return (
    <div className="rainbow-service-area rainbow-section-gapBottom">
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
                <span className="theme-gradient">What we can do for you</span>
              </h4>
              <h2 className="title w-600 mb--20">Services provide for you.</h2>
            </div>
          </div>
        </div>
        <div className="row row--15 service-wrapper">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              key={index}
              data-sal="slide-up"
              data-sal-delay={service.delay}
              data-sal-duration={800}
            >
              <div className="service service__style--1 icon-circle-style text-center">
                <div className="icon">
                  <i className={service.icon} />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="#">{service.title}</a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    {service.description}{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
