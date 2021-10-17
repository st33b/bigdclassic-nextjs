import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { parseISO, format } from 'date-fns';

import Layout from '../components/layout';

import styles from './schedule.module.scss';

const schedule = () => {
    const days = new Map();
    days.set('2022-08-12', [
        {
          type: 'register',
          start: '18:00:00',
          end: '20:30:00',
          name: ' Registration',
          where: 'Plano Super Bowl',
          additional: 'Event Room - behind lanes 1-6',
        },
        {
          type: 'bowling',
          start: '20:00:00',
          end: '23:00:00',
          name: 'Optional 9-pin No-Tap Event',
          where: 'Plano Super Bowl',
          additional: '3 games; $20 per bowler; 3 average divisions; scratch scores',
        },
      ]
    );
    days.set('2022-08-13', [
        {
          type: 'register',
          start: '10:00:00',
          end: '11:45:00',
          name: 'All Tournament Registration',
          where: 'Plano Super Bowl',
          additional: 'Event Room - behind lanes 1-6',
        },
        {
          type: 'bowling',
          start: '12:00:00',
          end: '18:00:00',
          name: 'Singles and Doubles Events',
          where: 'Plano Super Bowl',
          additional: '45-minute break between events',
        },
      ]
    );
    days.set('2022-08-14', [
      {
        type: 'social',
        start: '09:00:00',
        end: '10:30:00',
        name: 'Bowler Breakfast, Awards, Raffles',
        where: 'Plano Super Bowl',
        additional: 'Join us for delicious breakfast tacos starting at 9:00 am, with awards from Saturday, Rainbow Raffle and tournament free entry giveaways to start at 9:30 am.  Seating will be with your team on your assigned lane.',
      },
        {
          type: 'bowling',
          start: '10:30:00',
          end: '13:30:00',
          name: 'Team Event',
          where: 'Plano Super Bowl',
          additional: null,
        },
      {
        type: 'awards',
        start: '13:45:00',
        end: '14:00:00',
        name: 'Team and Special Awards',
        where: 'Plano Super Bowl',
        additional: null,
      },
        {
          type: 'bowling',
          start: '14:00:00',
          end: '16:30:00',
          name: 'Scratch Shootout Competition',
          where: 'Plano Super Bowl',
          additional: null,
        },
      ]
    );

    const daysAndEvents = [...days.entries()];
    // format(parseISO(x), 'str')
    return (
      <Layout>
        <div className={styles.Schedule}>
          <h1 className="display-4">
            Schedule of Events
          </h1>

          <h5 className="text-muted">
            To be confirmed...
          </h5>

          {/*{daysAndEvents.map((entry, d) => {*/}
          {/*  return (*/}
          {/*    <div className={styles.EventDay} key={d}>*/}
          {/*      <h2>*/}
          {/*        {format(parseISO(entry[0]), 'EEEE, d MMMM')}*/}
          {/*      </h2>*/}
          {/*      {entry[1].map((event, i) => {*/}
          {/*        let eventAdditional = '';*/}
          {/*        if (event.additional) {*/}
          {/*          eventAdditional = (*/}
          {/*            <p className={styles.Additional}>*/}
          {/*              {event.additional}*/}
          {/*            </p>*/}
          {/*          );*/}
          {/*        }*/}
          {/*        const parsedStartTime = parseISO(entry[0] + ' ' + event.start);*/}
          {/*        const parsedEndTime = parseISO(entry[0] + ' ' + event.end);*/}
          {/*        return (*/}
          {/*          // add event type styling to the row*/}
          {/*          <Row className={styles.Event} key={i}>*/}
          {/*            <Col xs={3} className="d-flex align-items-center justify-content-center">*/}
          {/*              <p className={styles.StartTime}>*/}
          {/*                {format(parsedStartTime, 'h:mm')}*/}
          {/*                <small>{' '}{format(parsedStartTime, 'a')}</small>*/}
          {/*              </p>*/}
          {/*            </Col>*/}
          {/*            <Col xs={9} className={styles.Details}>*/}
          {/*              <p className={styles.Name + " lead"}>*/}
          {/*                {event.name}*/}
          {/*              </p>*/}
          {/*              <p className={styles.Location}>*/}
          {/*                {event.where}*/}
          {/*              </p>*/}
          {/*              <p className={styles.FullTime}>*/}
          {/*                {format(parsedStartTime, 'h:mmaaa')} - {format(parsedEndTime, 'h:mmaaa')}*/}
          {/*              </p>*/}
          {/*              {eventAdditional}*/}
          {/*            </Col>*/}
          {/*          </Row>*/}
          {/*        );*/}
          {/*      })}*/}
          {/*    </div>*/}
          {/*  );*/}
          {/*})}*/}
        </div>
      </Layout>
    );
  }
;

export default schedule;
