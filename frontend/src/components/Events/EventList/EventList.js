import React from 'react';
import './EventList.css'

import EventItem from './EventItem/EventItem'
import EncartEvent from "./EncartEvent/EncartEvent";
import EncartEventLarge from "./EncartEvent/EncartEventLarge";

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

           /*<EventItem
               eventId={event._id}
               barName={event.barName}
               eventName={event.eventName}
               date={event.date}
               key={event._id}
               userId={props.authUserId}
               onDetail={props.onViewDetail}
           />*/

/*

{
    if (index == 0) {

        return (
            <EncartEventLarge
                date={event.date}
                nomBar={event.barName}
                nomEvenement={event.eventName}
                lienfb={event.fbLink}/>);

    }
}
{
    if(index >= 1) {

        return (
            <EncartEvent
                date={event.date}
                nomBar={event.barName}
                nomEvenement={event.eventName}
                lienfb={event.fbLink}/>);

    }
}

 */