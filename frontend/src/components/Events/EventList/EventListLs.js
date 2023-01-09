import React from 'react';
import './EventList.css';
import EncartBlanc from '../../Encart/EncartBlanc';
import EncartEventMd6 from '../2/EncartEventMd6';
import EncartEventMd12 from '../2/EncartEventMd12';

const moment = require('moment');

const eventListLs = (props) => {
  const pastEvent = props.events
    .filter((event) => moment(event.date).isBefore(moment().startOf('day')))
    .sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf())
    .map((event, index) => (
          <EncartEventMd6
            date={event.date}
            nomBar={event.barName}
            nomEvenement={event.eventName}
            lienFb={event.fbLink}
          />

    ));
  const futurEvent = props.events
    .filter((event) => moment(event.date).isAfter(moment().startOf('day')))
    .sort((a, b) =>  moment(a.date).valueOf() - moment(b.date).valueOf())
    .map((event,index) =>
        (
         index === 0 ?
          <EncartEventMd12
            date={event.date}
            nomBar={event.barName}
            nomEvenement={event.eventName}
            lienFb={event.fbLink}
          />
          :
             <EncartEventMd6
                 date={event.date}
                 nomBar={event.barName}
                 nomEvenement={event.eventName}
                 lienFb={event.fbLink}
             />

        )
    );


  return (
    <div>

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
            <div className="wrap">
              {pastEvent}
            </div>
          </div>
        </section>
    </div>

  );
};


export default eventListLs;
