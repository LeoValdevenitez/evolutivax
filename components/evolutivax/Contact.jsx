"use client";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import emailjs from "@emailjs/browser";


const Result = () => {
  return (
    <p className="success-message">
     TU MENSAJE FUE ENVIADO , PRONTO TE CONTACTAREMOS
    </p>
  );
};
export default function Contact() {
  const [result, showresult] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_opai9eh", "template_jdkka7c", formRef.current, {
        publicKey: "p8Iq2wFtsTdQg6af4",
      })
      .then(
        (result) => {
          showresult(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  const formRef1 = useRef();

  const sendEmail1 = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_opai9eh", "template_jdkka7c", formRef1.current, {
        publicKey: "p8Iq2wFtsTdQg6af4",
      })
      .then(
        (result) => {
          showresult(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);
  const [activo, setActivo] = useState(true);
  function handleRecaptchaChange(value) {
    if (value) {
      setActivo(false);
    }
  }

  const [activo1, setActivo1] = useState(true);
  function handleRecaptchaChange1(value) {
    if (value) {
      setActivo1(false);
    }
  }
  return (
    <div className="main-content">
      <div className="rainbow-contact-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb--40">
              <div className="section-title text-center">
                <h4 className="subtitle">
                  <span className="theme-gradient">Contacto</span>
                </h4>
                <h2 className="title w-600 mb--20">Canales de comunicación</h2>
              </div>
            </div>
          </div>
          <div className="row row--15">
            <div className="col-lg-12">
              <div className="rainbow-contact-address mt_dec--30">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="rainbow-address">
                      <div className="icon">
                        <i className="feather-headphones" />
                      </div>
                      <div className="inner">
                        <h4 className="title">Llamanos</h4>
                        <p>
                          <a href="tel:+5492615345555">+54 9 261 534 5555</a>
                        </p>
                        <p>
                          <a href="tel:+5492646709787">+54 9 264 670 9787</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="rainbow-address">
                      <div className="icon">
                        <i className="feather-mail" />
                      </div>
                      <div className="inner">
                        <h4 className="title">Escribenos</h4>
                        <p>
                          <a href="mailto:info@evolutivax.com.ar">
                          info@evolutivax.com.ar
                          </a>
                        </p><br/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rainbow-tab-area rainbow-section-gap">
            <div className="container">
              <div className="row mb--40">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <p className="description">
                      Agenda una consulta con nuestros expertos y descubre cómo
                      podemos ayudarte a transformar tu Empresa.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row row--30 align-items-center">
                <div className="col-lg-12">
                  <div className="rainbow-default-tab style-three">
                    <ul className="nav nav-tabs tab-button" role="tablist">
                      <li className="nav-item tabs__tab" role="presentation">
                        <button
                          className="nav-link active"
                          id="service-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#service"
                          type="button"
                          role="tab"
                          aria-controls="service"
                          aria-selected="true"
                        >
                          Individuo
                        </button>
                      </li>
                      <li className="nav-item tabs__tab" role="presentation">
                        <button
                          className="nav-link"
                          id="about-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#about"
                          type="button"
                          role="tab"
                          aria-controls="about"
                          aria-selected="false"
                        >
                          Empresa
                        </button>
                      </li>
                    </ul>
                    <div className="rainbow-tab-content tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="service"
                        role="tabpanel"
                        aria-labelledby="service-tab"
                      >
                        <div className="inner">
                          <div className="row align-items-center row--30">
                            <div className="col-lg-12">
                              <div className="section-title">
                                <h4 className="title">
                                  Completa el formulario
                                </h4>
                                <form
                                  ref={formRef}
                                  className="contact-form-1 rainbow-dynamic-form"
                                  onSubmit={sendEmail}
                                >
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          name="apellido-nombre"
                                          id="apellido-nombre"
                                          placeholder="Apellido y Nombre"
                                          required
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          name="telefono"
                                          id="telefono"
                                          placeholder="Teléfono"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <input
                                          type="email"
                                          name="email"
                                          id="email"
                                          placeholder="Correo Electrónico"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <textarea
                                        type="textarea"
                                        name="asunto"
                                        id="asunto"
                                        rows="5"
                                        placeholder="Asunto"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <ReCAPTCHA
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                    sitekey="6Leh1vgqAAAAAN9OMPiYpUG6oH8AVtSM5Ku0J20E"
                                    onChange={handleRecaptchaChange}
                                  />
                                  <br />
                                  <div className="form-group text-center">
                                    <button
                                      name="submit"
                                      type="submit"
                                      id="submit"
                                      disabled={activo}
                                      className="btn-default btn-large rainbow-btn"
                                    >
                                      <span>Enviar</span>
                                    </button>
                                  </div>
                                  <div className="form-group text-center">
                                    {result ? <Result /> : null}
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="about"
                        role="tabpanel"
                        aria-labelledby="about-tab"
                      >
                        <div className="inner">
                          <div className="row align-items-center row--30">
                            <div className="col-lg-12">
                              <div className="section-title">
                                <h4 className="title">
                                  Completa el formulario
                                </h4>

                                <form
                                  ref={formRef1}
                                  className="contact-form-1 rainbow-dynamic-form"
                                  onSubmit={sendEmail1}
                                >
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          name="razon-social"
                                          id="razon-social"
                                          placeholder="Razón Social"
                                          required
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          name="cuit"
                                          id="cuit"
                                          placeholder="CUIT"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          name="telefono"
                                          id="telefono"
                                          placeholder="Teléfono"
                                          required
                                        />
                                      </div>

                                      <div className="form-group">
                                        <input
                                          type="email"
                                          name="email"
                                          id="email"
                                          placeholder="Correo Electrónico"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <textarea
                                        type="textarea"
                                        name="asunto"
                                        id="asunto"
                                        rows="5"
                                        placeholder="Asunto"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <ReCAPTCHA
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                    sitekey="6LdKTackAAAAALRy_iGAxOGahxovZ5CBLM87Iw7D"
                                    onChange={handleRecaptchaChange1}
                                  />
                                  <br />
                                  <div className="form-group text-center">
                                    <button
                                      name="submit"
                                      type="submit"
                                      id="submit"
                                      disabled={activo1}
                                      className="btn-default btn-large rainbow-btn"
                                    >
                                      <span>Enviar</span>
                                    </button>
                                  </div>
                                  <div className="form-group text-center">
                                    {result ? <Result /> : null}
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
