import React from 'react';
import './EventList.css'
import EncartEvent from "./EncartEvent/EncartEvent";

const eventList = props =>{

    const events = props.events.map((event,index) => {
        return (

            <EncartEvent
                date={event.date}
                nomBar={event.barName}
                nomEvenement={event.eventName}
                lienFb={event.fbLink}
                index={index}
                key={event._id}
                eventId = {event._id}
                deleteThisEvent = {props.onDeleteEvent}
                />
                );
        });

    return (
        <ul className="event__list">
            {events}
        </ul>
    );
}


export default eventList;

