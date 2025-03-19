import React from "react";
import Image from "next/image";
import { brandImages } from "@/data/brands";
export default function Brands() {
  return (
    <div className="rainbow-brand-area rainbow-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <div
              className="section-title text-center sal-animate"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
            
              <h2 className="title w-600 mb--20">
              Partners
               
              </h2>
            </div>
          </div>
        </div>
        <div className="row mb--20">
          <div className="col-lg-12 mt--10">
            <ul className="brand-list brand-style-2">
              {brandImages.slice(0, 6).map((image, index) => (
                <li key={index}>
                  <a href="#">
                    <Image
                      alt={image.alt}
                      src={image.src}
                      width={232}
                      height={110}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
