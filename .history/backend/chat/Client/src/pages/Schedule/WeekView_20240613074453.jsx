import React from 'react';
import { sampleClasses } from './Data';
import moment from 'moment';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const WeekView = () => {
  const startOfWeek = moment().startOf('week');
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(startOfWeek.clone().add(i, 'days'));
  }

  return (
    <div className="bg-white p-4 rounded shadow overflow-auto">
      <h2 className="text-lg font-bold mb-4">Week of {startOfWeek.format('MMMM Do, YYYY')}</h2>
      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map((day, index) => (
          <div key={day} className="font-bold text-center p-2 border-b">
            {day}
          </div>
        ))}
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="border p-2 h-96 relative">
            <div className="font-bold mb-2">{day.format('DD')}</div>
            {sampleClasses
              .filter(event => moment(event.date).isSame(day, 'day'))
              .map((event, eventIndex) => (
                <div
                  key={eventIndex}
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
        ))}
      </div>
    </div>
  );
};

export default WeekView;
