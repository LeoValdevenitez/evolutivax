"use client";
import React from "react";

export default function Contact() {
  return (
    <div
      className="rainbow-contact-area rainbow-section-gap scrollSpySection"
      id="contact"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb--40">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h2 className="title w-600 mb--20">Contacto</h2>
              <p className="description b1">
                Por favor complete el formulario de contacto.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-7">
            <form
              className="contact-form-1 rainbow-dynamic-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="contact-name"
                  id="contact-name"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="contact-phone"
                  id="contact-phone"
                  placeholder="Tu telefono"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="contact-email"
                  name="contact-email"
                  placeholder="Tu correo electrónico"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Asunto"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="contact-message"
                  id="contact-message"
                  placeholder="Su mensaje"
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <button
                  name="submit"
                  type="submit"
                  id="submit"
                  className="btn-default btn-large rainbow-btn round"
                >
                  <span>enviar</span>
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-5">
            <div className="google-map-style-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.8285708012745!2d-68.84545022333873!3d-32.90270046967199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091330865379%3A0x15417a9dec848468!2sAv.%20San%20Mart%C3%ADn%2092%2C%20M5500%20Mendoza!5e0!3m2!1ses-419!2sar!4v1736372011870!5m2!1ses-419!2sar"
                width={600}
                height={550}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
