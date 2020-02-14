import React from 'react';
import './EventList.css'
import EncartEventLs from "./EncartEvent/EncartEventLs";
import EncartBlanc from "../../Encart/EncartBlanc";
import EncartEventLs2 from "../2/E";
import EncartEventLs3 from "../2/E2";
const moment = require('moment');

const eventListLs = props =>{

    const pastEvent = props.events
        .filter( event => moment(event.date).isBefore(moment().endOf("day")))
        .sort(function(a,b){
            return moment(b.date).valueOf() - moment(a.date).valueOf();
        })
        .map((event,index) => {
            return (
            index === 0 ?
            <EncartEventLs3
                date={event.date}
                nomBar={event.barName}
                nomEvenement={event.eventName}
                lienFb={event.fbLink}
            />
            :
                <EncartEventLs2
                    date={event.date}
                    nomBar={event.barName}
                    nomEvenement={event.eventName}
                    lienFb={event.fbLink}
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
                index === 0 ?
                    <EncartEventLs3
                        date={event.date}
                        nomBar={event.barName}
                        nomEvenement={event.eventName}
                        lienFb={event.fbLink}
                    />
                    :
                    <EncartEventLs2
                        date={event.date}
                        nomBar={event.barName}
                        nomEvenement={event.eventName}
                        lienFb={event.fbLink}
                    />
            );
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
                    <div className="container text-uppercase">
                    <div className="row">
            {pastEvent}
                    </div>
                    </div>
                </section>
            </li>
        </ul>
    );
}


export default eventListLs;
