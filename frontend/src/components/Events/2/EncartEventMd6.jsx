
import React from 'react';
import helpers from '../../../helpers/date';
import './E.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";


const EncartEventMd6 = (props) => (

  <div className="col-md-6 padded">
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
        <div className="col-md-9">
          <span className="text-capitalize whiteText">{props.nomBar}</span>
          <h4 className="whiteText">{props.nomEvenement}</h4>
          <div className="row">
            <div className="col-md-10">
              <FontAwesomeIcon icon={faFacebookF} color={"white"} className={"beige"}/>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={props.lienFb}
              >
                &nbsp;&nbsp;SEE EVENT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default EncartEventMd6;