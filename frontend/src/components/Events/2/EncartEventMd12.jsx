
import React from 'react';
import helpers from '../../../helpers/date';
import './E.css';


const EncartEventMd12 = (props) => (


  <div className="col-md-12 padded">
    <div className="event-card">
      <div className="row">
        <div className="col-md-3 date">
          <h3 className="dateSize whiteText">
            {new Date(props.date).getDate()}
            <span>
              {helpers.monthToString(new Date(props.date))}
              <br />
              {new Date(props.date).getFullYear()}
            </span>
          </h3>
        </div>
        <div className="col-md-9 center">
          <span className="text-capitalize whiteText">{props.nomBar}</span>
          <h4 className="whiteText">{props.nomEvenement}</h4>
          <div className="row">
            <div className="col-md-12 center">
              <i className="fab fa-facebook-f whiteText">&nbsp;&nbsp;&nbsp;</i>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={props.lienFb}
              >
                {props.lienFb === '' ? 'COMING SOON' : 'SEE EVENT' }
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

);


export default EncartEventMd12;
