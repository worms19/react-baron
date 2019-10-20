import React from 'react';
import './EventList.css'

import EventItem from './EventItem/EventItem'
import EncartEvent from "./EncartEvent/EncartEvent";
import EncartEventLarge from "./EncartEvent/EncartEventLarge";
import EncartEventLs from "./EncartEvent/EncartEventLs";

const eventListLs = props =>{

    const events = props.events.map((event,index) => {
        return (

            <EncartEventLs
                date={event.date}
                nomBar={event.barName}
                nomEvenement={event.eventName}
                lienFb={event.fbLink}
                index={index}
                key={event._id}
                eventId = {event._id}
            />
        );
    });

    return (
        <ul className="event__list">
            {events}
        </ul>
    );
}


export default eventListLs;
