import React from 'react';
import './EventList.css';
import moment from 'moment';
import EncartEventMd12Adm from '../2/EncartEventMd12Adm';
import EncartEventMd6Adm from '../2/EncartEventMd6Adm';
import EncartBlanc from '../../Encart/EncartBlanc';

const EventList = (props) => {
  const pastEvent = props.events
    .filter((event) => moment(event.date).isBefore(moment().endOf('day')))
    .sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf())
    .map((event, index) => (
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

    ));
    const futurEvent = props.events
        .filter((event) => moment(event.date).isAfter(moment().startOf('day')))
        .sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf());

    const nextEvent = futurEvent.pop();


  const md6 = futurEvent.map((event) =>
          <EncartEventMd6Adm
            date={event.date}
            nomBar={event.barName}
            nomEvenement={event.eventName}
            lienFb={event.fbLink}
            key={event._id}
            eventId={event._id}
            deleteThisEvent={props.onDeleteEvent}
          />
    );
    const md12 = (nextEvent && nextEvent.length > 0) ?
          <EncartEventMd12Adm
            date={nextEvent.date}
            nomBar={nextEvent.barName}
            nomEvenement={nextEvent.eventName}
            lienFb={nextEvent.fbLink}
            key={nextEvent._id}
            eventId={nextEvent._id}
            deleteThisEvent={props.onDeleteEvent}
          /> : <div></div>;



  return (


      <div className="container">

          <EncartBlanc
              text1="See what’s new"
              text2="Next Shows"
          />

          <section className="displayBlock">
              {md12}
              {md6}
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


export default EventList;
