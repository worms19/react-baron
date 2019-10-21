import React from 'react';
import './EventList.css'
import EncartEventLs from "./EncartEvent/EncartEventLs";
import EncartBlanc from "../../Encart/EncartBlanc";
import {helpers} from "../../../helpers/date";
const moment = require('moment');

const eventListLs = props =>{

    const pastEvent = props.events
        .filter( event => moment(event.date).isBefore(moment().endOf("day")))
        .sort(function(a,b){
            return moment(b.date).valueOf() - moment(a.date).valueOf();
        })
        .map((event,index) => {
        return (
            <EncartEventLs
                date={event.date}
                nomBar={event.barName}
                nomEvenement={event.eventName}
                lienFb={event.fbLink}
                index={1}
                key={event._id}
                eventId = {event._id}
            />
        );
    });
    const futurEvent = props.events
        .filter( event => moment(event.date).isAfter(moment().endOf("day")))
        .sort(function(a,b){
        return moment(b.date).valueOf() - moment(a.date).valueOf();
    })
        .map((event,index) => {
            return (
                <EncartEventLs
                    date={event.date}
                    nomBar={event.barName}
                    nomEvenement={event.eventName}
                    lienFb={event.fbLink}
                    index={index}
                    key={event._id}
                    eventId={event._id}
                />
            );
            {
                console.log('past Event', pastEvent);
            }
        });
    return (
        <ul className="event__list">
            <li>
                <EncartBlanc
                    text1="See what’s new"
                    text2="Latests SHOWS"
                />
            </li>
            <li>
                <section className="displayBlock">
            {futurEvent}
                </section>
            </li>
            <li>
            <EncartBlanc
                text1="See what’s new"
                text2="Past SHOWS"
            />
            </li>
            <li>
                <section>
            {pastEvent}
                </section>
            </li>
        </ul>
    );
}


export default eventListLs;
