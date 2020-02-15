
import React from 'react';
import helpers from '../../../helpers/date';
import './E.css';


const PressKitEncart = (props) => (

  <div className="col-md-6 ">
    <div className="event-card">
      <div className="row">
        <div className="col-md-12 center">
          <h4 className="whiteText"> ENGLISH VERSION</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 md-text-right xs-center your-item">
            <span>
              Bio
            </span>
        </div>
        <div className="col-md-6 ">
            <span>
              Review
            </span>
        </div>
      </div>
        <div className="row">
            <div className="col-md-12 center">
                <i className="fas fa-file-pdf">&nbsp;&nbsp;</i>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={props.lienFb}
                >
                    DOWNLOAD
                </a>
            </div>
        </div>
    </div>
  </div>
);


export default PressKitEncart;
