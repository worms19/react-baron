import React from 'react';
import './EncartContact.css';

const EncartContact = (props) => (

    <div className="col-md-12 padded">
      <div className="event-card">
        <div className="row">
          <div className="col-md-12 center">
            <h4 className="text-capitalize whiteText">
              nom :{props.nom}
              <button className="messageButton" onClick={props.onDeleteContact.bind(this, props.contactMessageId)}>X
              </button>
            </h4>
            <h4 className="text-capitalize whiteText">mail :{props.mail}</h4>
            <h4 className="whiteText">tel:{props.phone}</h4>
            <h4 className="whiteText">date:{props.date}</h4>
            <span className="whiteText">message:{props.message}</span>

          </div>
        </div>
      </div>
    </div>
);

export default EncartContact;
