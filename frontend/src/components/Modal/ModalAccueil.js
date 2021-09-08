import React from "react";
import EncartBlanc from "../Encart/EncartBlanc.js";

import "./ModalAccueil.css";
const ModalAccueil = (props) => (
  <div className="modal__Accueuil">
    {props.canCancel && (
      <button className="btn__Accueuil" onClick={props.onCancel}>
        X
      </button>
    )}
    <div className="topBarAccueil"></div>
    <section className="modal__content__Accueuil">{props.children}</section>
  </div>
);

export default ModalAccueil;
