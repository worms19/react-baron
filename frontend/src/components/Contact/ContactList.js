import React from 'react';
import EncartContact from "./EncartContact";
import '../Events/EventList/EventList.css'

const ContactList = props =>{

    const contacts = props.contacts.map((contactMessage,index) => {
        return (

            <EncartContact
                nom={contactMessage.nom}
                mail={contactMessage.mail}
                phoneContact={contactMessage.phoneContact}
                message={contactMessage.message}
                index={index}
                key={contactMessage._id}
                contactMessageId = {contactMessage._id}
                />
                );
        });

    return (
        <ul className="contactMessage__list">
            {contacts}
        </ul>
    );
}


export default ContactList;

