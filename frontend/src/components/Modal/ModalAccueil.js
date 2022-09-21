import React from "react";
import "./ModalAccueil.css";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ModalAccueil = (props) => (
  <div className="modal__Accueuil">
    {props.canCancel && (
      <div className="buttonA"  onClick={props.onCancel}>
       <FontAwesomeIcon  icon={faTimes} color={"white"} />
      </div>


    )}
    <div className="topBarAccueil"></div>
    <section className="modal__content__Accueuil">{props.children}</section>
  </div>
);

export default ModalAccueil;
