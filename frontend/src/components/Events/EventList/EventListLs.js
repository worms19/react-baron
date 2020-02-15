import React from 'react';
import './EventList.css';
import EncartBlanc from '../../Encart/EncartBlanc';
import EncartEventMd6 from '../2/EncartEventMd6';
import EncartEventMd12 from '../2/EncartEventMd12';

const moment = require('moment');

const eventListLs = (props) => {
  const pastEvent = props.events
    .filter((event) => moment(event.date).isBefore(moment().endOf('day')))
    .sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf())
    .map((event, index) => (
      index === 0
        ? (
          <EncartEventMd12
            date={event.date}
            nomBar={event.barName}
            nomEvenement={event.eventName}
            lienFb={event.fbLink}
          />
        )
        : (
          <EncartEventMd6
            date={event.date}
            nomBar={event.barName}
            nomEvenement={event.eventName}
            lienFb={event.fbLink}
          />
        )
    ));
  const futurEvent = props.events
    .filter((event) => moment(event.date).isAfter(moment().endOf('day')))
    .sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf())
    .map((event, index) => (
      index === 0
        ? (
          <EncartEventMd12
            date={event.date}
            nomBar={event.barName}
            nomEvenement={event.eventName}
            lienFb={event.fbLink}
          />
        )
        : (
          <EncartEventMd6
            date={event.date}
            nomBar={event.barName}
            nomEvenement={event.eventName}
            lienFb={event.fbLink}
          />
        )
    ));
  return (
    <ul className="event__list">
      <li>
        <EncartBlanc
          text1="See what’s new"
          text2="next SHOWS"
        />
      </li>
      <li>
        <section className="displayBlock">
          {futurEvent}
        </section>
      </li>
      <li>
        <EncartBlanc
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
};


export default eventListLs;
