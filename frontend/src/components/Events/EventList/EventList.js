import React from 'react';
import './EventList.css';
import moment from 'moment';
import EncartEventMd12Adm from '../2/EncartEventMd12Adm';
import EncartEventMd6Adm from '../2/EncartEventMd6Adm';
import EncartBlanc from '../../Encart/EncartBlanc';

const eventList = (props) => {
  const pastEvent = props.events
    .filter((event) => moment(event.date).isBefore(moment().endOf('day')))
    .sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf())
    .map((event, index) => (
      index === 0
        ? (
          <EncartEventMd12Adm
            date={event.date}
            nomBar={event.barName}
            nomEvenement={event.eventName}
            lienFb={event.fbLink}
            index={index}
            key={event._id}
            eventId={event._id}
            deleteThisEvent={props.onDeleteEvent}
          />
        )
        : (
          <EncartEventMd6Adm
            date={event.date}
            nomBar={event.barName}
            nomEvenement={event.eventName}
            lienFb={event.fbLink}
            index={index}
            key={event._id}
            eventId={event._id}
            deleteThisEvent={props.onDeleteEvent}
          />
        )
    ));
  const futurEvent = props.events
    .filter((event) => moment(event.date).isAfter(moment().endOf('day')))
    .sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf())
    .map((event, index) => (
      index === 0
        ? (
          <EncartEventMd12Adm
            date={event.date}
            nomBar={event.barName}
            nomEvenement={event.eventName}
            lienFb={event.fbLink}
            index={index}
            key={event._id}
            eventId={event._id}
            deleteThisEvent={props.onDeleteEvent}
          />
        )
        : (
          <EncartEventMd6Adm
            date={event.date}
            nomBar={event.barName}
            nomEvenement={event.eventName}
            lienFb={event.fbLink}
            index={index}
            key={event._id}
            eventId={event._id}
            deleteThisEvent={props.onDeleteEvent}
          />
        )
    ));


  return (


      <div className="container">

          <EncartBlanc
              text1="See what’s new"
              text2="Next Shows"
          />

          <section className="displayBlock">
              {futurEvent}
          </section>

          <EncartBlanc
              text2="Past Shows"
          />

          <section className="pastEvent">
              <div className=" text-uppercase">
                  <div className="row">
                      {pastEvent}
                  </div>
              </div>
          </section>
      </div>

  );
};


export default eventList;
