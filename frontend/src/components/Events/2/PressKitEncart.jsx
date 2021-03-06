import React from 'react';
import './E.css';


const PressKitEncart = (props) => (

  <div className="col-md-6 ">
    <div className="event-card">
      <div className="row">
        <div className="col-md-12 center">
          <h4 className="whiteText">{props.t1}</h4>
        </div>
      </div>
      <div className="row">
          <div className="col-md-12 center">
              <div className="your-item beige">
                  <div className="inline">
                    <span>
                        {props.t2}
                    </span>
                  </div>
                  <span>
                        {props.t3}

                </span>

              </div>
          </div>
      </div>
        <div className="row">
            <div className="col-md-12 center beige">


                <i className="fas fa-file-pdf">&nbsp;&nbsp;</i>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={props.l1}
                >
                        {props.t4}

                </a>

            </div>
        </div>
    </div>
  </div>
);


export default PressKitEncart;
