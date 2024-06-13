import React from 'react';
import { sampleClasses } from './Data';
import moment from 'moment';

const DayView = () => {
  const today = moment().startOf('day');
  const eventsToday = sampleClasses.filter(event => moment(event.date).isSame(today, 'day'));

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Events for {today.format('MMMM Do, YYYY')}</h2>
      <div className="border p-2 h-96">
        <div className="relative h-full">
          {eventsToday.map((event, index) => (
            <div
              key={index}
              className="absolute bg-blue-500 text-white p-2 rounded text-xs"
              style={{
                top: `${(event.startPeriod - 1) * 40}px`,
                height: `${(event.endPeriod - event.startPeriod + 1) * 40}px`
              }}
            >
              <div>{event.name}</div>
              <div>{event.teacher}</div>
              <div>{event.classroom}</div>
              <div>{event.startTime} - {event.endTime}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayView;
