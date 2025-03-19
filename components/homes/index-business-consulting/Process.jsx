import React from "react";
import Image from "next/image";
import Link from "next/link";
import { timelines } from "@/data/process";
export default function Process() {
  return (
    <div className="rainbow-timeline-area rainbow-section-gap">
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
                <span className="theme-gradient">Nuestras Soluciones </span>
              </h4><br/>
              <h2 className="title w-600 mb--20">Proceso de trabajo</h2>
              <div className="text-start">
              <p className="description h4">
              En Binaria, ofrecemos soluciones contables integrales para que tu empresa crezca de manera sólida y segura.
              </p><br/>
              <p className="description b1">
              Contamos con un equipo especializado que te asesorará en cada paso, garantizando el cumplimiento de las normativas fiscales y optimizando la gestión financiera de tu negocio.<br/> Nuestro enfoque está en brindarte tranquilidad y resultados efectivos.
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="rainbow-timeline-wrapper timeline-style-one position-relative">
              <div className="timeline-line" />
              {timelines.map((item, index) => (
                <div className="single-timeline mt--50" key={index}>
                  <div className="timeline-dot">
                    <div className="time-line-circle" />
                  </div>
                  <div className="single-content">
                    <div className="inner">
                      <div className="row row--30 align-items-center">
                        <div className="col-lg-6 mt_md--40 mt_sm--40 order-2 order-lg-1">
                          <div className="content">
                            <span className="date-of-timeline">
                              {item.step}
                            </span>
                            <h2
                              className="title"
                              data-sal="slide-up"
                              data-sal-duration={700}
                              data-sal-delay={100}
                            >
                              {item.title}
                            </h2><br/>
                            <p
                              className="description-1"
                              data-sal="slide-up"
                              data-sal-duration={700}
                              data-sal-delay={200}
                            >
                              {item.description}
                            </p>
            
  
                          </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                          <div className="thumbnail">
                            <Image
                              className="w-100"
                              alt={item.imageAlt}
                              src={item.imageSrc}
                              width={1920}
                              height={2126}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
