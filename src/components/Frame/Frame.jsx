/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Button } from "../Button";
import "./style.css";

export const Frame = ({ property1, className, text = " buscar curso..." }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`frame ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`buscar-curso ${state.property1}`}>
        {state.property1 === "default" && <>{text}</>}

        {state.property1 === "variant-2" && (
          <>
            <p className="span-wrapper">
              <span className="text-wrapper-9">&nbsp;</span>
            </p>
            <p className="span-wrapper">
              <span className="text-wrapper-10">Diseño web</span>
            </p>
          </>
        )}
      </div>
      <Button className="button-instance" iconLupaColorWhiteStyleOverrideClassName="button-8" property1="default" />
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

Frame.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  text: PropTypes.string,
};
