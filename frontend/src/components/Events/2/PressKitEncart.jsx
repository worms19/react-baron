import React from 'react';
import './E.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-regular-svg-icons/faCalendar";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons";


const PressKitEncart = (props) => (

  <div className="col-md-8 col-md-offset-2 ">
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


                <FontAwesomeIcon icon={faFilePdf} color={"white"} className={"beige"}/>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={props.l1}
                >
                    &nbsp;&nbsp;{props.t4}

                </a>

            </div>
        </div>
    </div>
  </div>
);


export default PressKitEncart;
