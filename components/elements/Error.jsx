"use client";
import Link from "next/link";
import React from "react";

export default function Error() {
  return (
    <div className="error-area ptb--200 ptb_sm--60 ptb_md--80">
      <div className="container">
        <div className="row align-item-center">
          <div className="col-lg-12">
            <div className="error-inner">
              <h1>404</h1>
              <h2 className="title">Ups la pagina no existe.</h2>
       
   
              <div className="view-more-button">
                <Link className="btn-default" href={`/`}>
                  Volver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
