import React from 'react'

const EncartContact = (props) => (

<div className="col-12 col-md-6 col-lg-12">
    <div className="single-event-area  mb-1">

        <div className="event-text">
            <p>nom :{props.nom}</p>
            <p>mail :{props.mail}</p>
            <p>tel: {props.phoneContact}</p>
            <p>message: {props.message}</p>
            <button onClick={props.onDeleteContact.bind(this, props.contactMessageId)}>X</button>
        </div>
    </div>
</div>
)

export default EncartContact



