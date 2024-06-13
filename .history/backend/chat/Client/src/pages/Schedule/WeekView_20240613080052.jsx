// import React from 'react';
// import { sampleClasses } from './Data';
// import moment from 'moment';

// const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// const WeekView = () => {
//   const startOfWeek = moment().startOf('week');
//   const days = [];
//   for (let i = 0; i < 7; i++) {
//     days.push(startOfWeek.clone().add(i, 'days'));
//   }

//   return (
//     <div className="bg-white p-6 rounded-lg shadow overflow-auto">
//       <h2 className="text-xl font-bold mb-4 text-center">Week of {startOfWeek.format('MMMM Do, YYYY')}</h2>
//       <div className="grid grid-cols-7 gap-1">
//         {daysOfWeek.map((day, index) => (
//           <div key={index} className="font-bold text-center p-2 border-b bg-gray-200">
//             {day}
//           </div>
//         ))}
//         {days.map((day, dayIndex) => (
//           <div key={dayIndex} className="border p-2 h-96 relative bg-gray-50">
//             <div className="font-bold mb-2 text-center">{day.format('DD')}</div>
//             {sampleClasses
//               .filter(event => moment(event.date).isSame(day, 'day'))
//               .map((event, eventIndex) => (
//                 <div
//                   key={eventIndex}
//                   className="absolute bg-blue-500 text-white p-2 rounded-lg shadow-md text-xs"
//                   style={{
//                     top: `${(event.startPeriod - 1) * 40}px`,
//                     height: `${(event.endPeriod - event.startPeriod + 1) * 40}px`
//                   }}
//                 >
//                   <div className="font-semibold">{event.name}</div>
//                   <div className="text-xs">{event.teacher}</div>
//                   <div className="text-xs">{event.classroom}</div>
//                   <div className="text-xs">{event.startTime} - {event.endTime}</div>
//                 </div>
//               ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WeekView;

// import React from 'react';
// import { sampleClasses } from './Data';
// import moment from 'moment';

// const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// const WeekView = () => {
//   const startOfWeek = moment().startOf('week');
//   const days = [];
//   for (let i = 0; i < 7; i++) {
//     days.push(startOfWeek.clone().add(i, 'days'));
//   }

//   return (
//     <div className="bg-white p-6 rounded-lg shadow overflow-auto">
//       <h2 className="text-xl font-bold mb-4 text-center">Week of {startOfWeek.format('MMMM Do, YYYY')}</h2>
//       <div className="grid grid-cols-7 gap-1 overflow-col">
//         {daysOfWeek.map((day, index) => (
//           <div key={index} className="font-bold text-center p-2 border-b bg-gray-200">
//             {day}
//           </div>
//         ))}
//         {days.map((day, dayIndex) => (
//           <div key={dayIndex} className="border p-2 h-auto relative bg-gray-50">
//             <div className="font-bold mb-2 text-center">{day.format('DD')}</div>
//             {sampleClasses
//               .filter(event => moment(event.date).isSame(day, 'day'))
//               .map((event, eventIndex) => (
//                 <div
//                   key={eventIndex}
//                   className="relative bg-blue-500 text-white p-2 rounded-lg shadow-md text-xs mb-2"
//                 >
//                   <div className="font-semibold">{event.name}</div>
//                   <div>{event.teacher}</div>
//                   <div>{event.classroom}</div>
//                   <div>{event.startTime} - {event.endTime}</div>
//                 </div>
//               ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WeekView;

import React from 'react';
import { sampleClasses } from './Data';
import moment from 'moment';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const WeekView = ({ currentDate }) => {
  const startOfWeek = currentDate.clone().startOf('week');
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(startOfWeek.clone().add(i, 'days'));
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow overflow-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Week of {startOfWeek.format('MMMM Do, YYYY')}</h2>
      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="font-bold text-center p-2 border-b bg-gray-200">
            {day}
          </div>
        ))}
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="border p-2 h-auto relative bg-gray-50">
            <div className="font-bold mb-2 text-center">{day.format('DD')}</div>
            <div className="space-y-2"> {/* Added space-y-2 to separate the events */}
              {sampleClasses
                .filter(event => event.day === day.format('dddd')) // Check if the event day matches the current day
                .map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="bg-blue-500 text-white p-2 rounded-lg shadow-md text-xs mb-2"
                  >
                    <div className="font-semibold">{event.name}</div>
                    <div>{event.teacher}</div>
                    <div>{event.classroom}</div>
                    <div>{event.startTime} - {event.endTime}</div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekView;
