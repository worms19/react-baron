import React from 'react';
import './EncartYoutube.css';

const EncartYoutube = (props) => (
      <div className="col-md-12 padded">
          <div className="event-card">
              <div className="row">
                  <div className="col-md-12 center">
                      <h4 className="text-capitalize whiteText">
                          link : {props.link}
                          <button className="messageButton" onClick={props.deleteThisLink.bind(this, props.youtubeLinkId)}>X</button>
                          &nbsp;&nbsp;&nbsp;
                      <img class="fit-picture"
                           src={`http://img.youtube.com/vi/${props.link}/0.jpg`}
                           alt="Grapefruit slice atop a pile of other slices"/>
                      </h4>

                  </div>
              </div>
          </div>
      </div>
);

export default EncartYoutube;
