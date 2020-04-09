import React from 'react';

import './ModalAccueil.css';

const ModalAccueil = (props) => (
    <div className="modal-background_Accueuil">

  <div className="modal__Accueuil">
    <header className="modal__header__Accueuil">
      <h1 className="h1Grid">
        {' '}
        {props.title}
      </h1>
      {props.canCancel && <button className="btn__Accueuil" onClick={props.onCancel}>x</button>}
    </header>
    <section className="modal__content__Accueuil">
      {props.children}
    </section>

  </div>
    </div>
);

export default ModalAccueil;
