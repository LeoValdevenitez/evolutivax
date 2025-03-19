"use client";

import { NextArrow, PrevArrow } from "@/components/common/SliderArrows";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  const options = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    // adaptiveHeight: true,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    
    <div className="rainbow-callto-action-area rainbow-section-gapBottom">
      <div className="wrapper">
        <div className="rainbow-callto-action clltoaction-style-default style-5" >
      <div className="container" >
        <div className="row row--40 align-items-center" >
          <div className="col-lg-6 col-md-6 col-sm-12 mt_md--40 mt_sm--40" >
            <div className="content">
              <div className="inner">
                <div className="section-title">
                  <h4 className="subtitle">
                    <span className="theme-gradient">
                      Quienes somos
                    </span>
                  </h4>
                  <h2 className="title mb--25 w-600">
                    Somos un estudio<br/>
                    <span className="theme-gradient">
                     Contable Digital
                    </span>
                  </h2>
                </div>
                <div className="about-inner">
                  <p>
                    Que resuelve trámites y  consultas de forma 100% online, sin pérdidas de tiempo, ni burocracias.
                  </p>
                </div>
                <div className="about-btn mt--30">
                  <Link className="btn-default" href="/about">
                    Hablamos
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="about-app-thumbnail">
              <Slider
                {...options}
                className="about-app-activation rainbow-slick-dot rainbow-slick-arrow"
              >
                <div className="thumbnail">
                  <Image
                    className="radius-small"
                    alt="Corporate Image"
                    src="/assets/images/binaria/04.png"
                    width={550}
                    height={576}
                  />
                </div>
                <div className="thumbnail">
                  <Image
                    className="radius-small"
                    alt="Corporate Image"
                    src="/assets/images/binaria/02.png"
                    width={550}
                    height={576}
                  />
                </div>
                <div className="thumbnail">
                  <Image
                    className="radius-small"
                    alt="Corporate Image"
                    src="/assets/images/binaria/03.png"
                    width={550}
                    height={576}
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        </div>
    </div>
    </div>
    </div>
  );
}
