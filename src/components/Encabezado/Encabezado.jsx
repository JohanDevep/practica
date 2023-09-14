/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button1 } from "../Button1";
import { ButtonMenu } from "../ButtonMenu";
import { Frame } from "../Frame";
import { PropertyDefaultWrapper } from "../PropertyDefaultWrapper";
import "./style.css";

export const Encabezado = ({ className }) => {
  return (
    <div className={`encabezado ${className}`}>
      <div className="frame-9">
        <ButtonMenu className="design-component-instance-node" property1="default" text="Inicio" to="/inicio" />
        <ButtonMenu className="design-component-instance-node" property1="default" text="Cursos" />
        <ButtonMenu className="design-component-instance-node" property1="default" text="Instructores" />
        <ButtonMenu className="design-component-instance-node" property1="default" text="contactos" />
      </div>
      <div className="frame-10">
        <Frame className="design-component-instance-node" property1="default" text="&nbsp;&nbsp; buscar..." />
        <PropertyDefaultWrapper className="design-component-instance-node" property1="default" />
        <Button1 property1="default" />
      </div>
      <img
        className="image"
        alt="Image"
        src="https://generation-sessions.s3.amazonaws.com/c95b576ae80580f6e5f0ffbbeecc569a/img/image-9-1@2x.png"
      />
    </div>
  );
};
