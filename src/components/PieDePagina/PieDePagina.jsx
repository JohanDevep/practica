/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PieDePagina = ({
  solarCopyright = "https://generation-sessions.s3.amazonaws.com/c95b576ae80580f6e5f0ffbbeecc569a/img/solar-copyright-broken-1.svg",
  frame = "https://generation-sessions.s3.amazonaws.com/c95b576ae80580f6e5f0ffbbeecc569a/img/frame-16-1.svg",
}) => {
  return (
    <div className="pie-de-pagina">
      <div className="div">
        <div className="frame-2">
          <img className="solar-copyright" alt="Solar copyright" src={solarCopyright} />
          <p className="element-fundasoff-miss">
            <span className="text-wrapper">2023 FundaSoff Miss. To</span>
            <span className="text-wrapper">DOS LOS DERECHOS RESERVADOS</span>
          </p>
        </div>
        <div className="frame-3">
          <div className="text-wrapper-2">Políticas de Cookies</div>
          <div className="text-wrapper-2">Términos y condiciones</div>
        </div>
      </div>
      <div className="frame-4">
        <div className="frame-5">
          <img
            className="logo-blanco"
            alt="Logo blanco"
            src="https://generation-sessions.s3.amazonaws.com/c95b576ae80580f6e5f0ffbbeecc569a/img/logo-blanco-1-1@2x.png"
          />
          <p className="impacto-de-nuestras">
            Impacto de nuestras actuaciones en el bienestar y el desarrollo&nbsp;&nbsp;de las mujeres con las que
            trabajamos
          </p>
        </div>
        <div className="frame-6">
          <div className="text-wrapper-3">Cursos populares</div>
          <div className="frame-7">
            <div className="text-wrapper-4">Marketing Digital</div>
            <p className="text-wrapper-5">Instalación y configuración de redes de internet.</p>
            <div className="text-wrapper-6">Desarrollo de páginas web</div>
            <div className="text-wrapper-5">Desarrollo de aplicaciones móviles.</div>
            <p className="p">Instalación de cámaras de seguridad.</p>
          </div>
        </div>
        <div className="frame-8">
          <div className="text-wrapper-3">Contáctanos</div>
          <div className="frame-7">
            <p className="direcci-n-AV-a">
              <span className="span">Dirección: </span>
              <span className="text-wrapper-7">AV 26 # 26 A - 05 B/Las Granjas</span>
            </p>
            <p className="email-fundasoftmiss">
              <span className="span">Email:</span>
              <span className="text-wrapper-8"> fundasoftmiss@gmail.com</span>
            </p>
            <p className="div-2">
              <span className="span">Teléfono: </span>
              <span className="text-wrapper-7">3186929471</span>
            </p>
            <div className="div-2">www.fundasoftmiss.com</div>
            <img className="img" alt="Frame" src={frame} />
          </div>
        </div>
      </div>
    </div>
  );
};

PieDePagina.propTypes = {
  solarCopyright: PropTypes.string,
  frame: PropTypes.string,
};
