


import React from 'react'
import helpers from "../../../helpers/date";
import './E.css'


const EncartEventLs3 = (props) => (


            <div className="col-md-6 padded">
                <div className="event-card">
                    <div className="row">
                        <div className="col-md-3 date">
                            <h3 className="dateSize whiteText">{new Date(props.date).getDate()}
                                <span>
                                    {helpers.monthToString(new Date(props.date))}
                                    <br/>
                                    {new Date(props.date).getFullYear()}
                                </span>
                            </h3>
                        </div>
                        <div className="col-md-9">
                            <span className="text-capitalize whiteText">{props.nomBar}</span>
                            <h4 className="whiteText">{props.nomEvenement}</h4>
                            <div className="row">
                                <div className="col-md-1"><i className="fab fa-facebook-f whiteText"></i></div>
                                <div className="col-md-10">
                                    <a
                                        target="_blank"
                                        rel= "noopener noreferrer"
                                        href={props.lienFb}
                                    >
                                        {props.lienFb == '' ? 'COMING SOON' : 'SEE EVENT' }
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

)


export default EncartEventLs3

