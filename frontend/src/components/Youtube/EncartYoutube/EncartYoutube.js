import React from 'react'

const EncartYoutube = (props) => (

<div className= "col-12 col-md-6 col-lg-12">
    <div className="single-event-area  mb-1">
        <div className="event-text">
            <p>link : {props.link}</p>
            <button onClick={props.deleteThisLink.bind(this, props.youtubeLinkId)}>X</button>
        </div>
    </div>
</div>
)

export default EncartYoutube




