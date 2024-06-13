import React from 'react';
import { sampleClasses } from './Data';
import moment from 'moment';

const DayView = () => {
  const today = moment().startOf('day');
  const eventsToday = sampleClasses.filter(event => moment(event.date).isSame(today, 'day'));

  return (
    <div className="bg-white p-6 rounded-lg shadow overflow-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Events for {today.format('MMMM Do, YYYY')}</h2>
      <div className="border p-2 h-96 relative bg-gray-50">
        {eventsToday.length > 0 ? (
          eventsToday.map((event, index) => (
            <div
              key={index}
              className="relative bg-blue-500 text-white p-2 rounded-lg shadow-md text-xs mb-2"
              style={{
                top: `${(event.startPeriod - 1) * 40}px`,
                height: `${(event.endPeriod - event.startPeriod + 1) * 40}px`
              }}
            >
              <div className="font-semibold">{event.name}</div>
              <div>{event.teacher}</div>
              <div>{event.classroom}</div>
              <div>{event.startTime} - {event.endTime}</div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No events scheduled for today.</p>
        )}
      </div>
    </div>
  );
};

export default DayView;

// import React from 'react';
// import { sampleClasses } from './Data';
// import moment from 'moment';

// const DayView = () => {
//   const today = moment().format('dddd'); // Get the current day as a string
//   const eventsToday = sampleClasses.filter(event => event.day === today);

//   return (
//     <div className="bg-white p-6 rounded-lg shadow overflow-auto">
//       <h2 className="text-xl font-bold mb-4 text-center">Events for {moment().format('MMMM Do, YYYY')}</h2>
//       <div className="border p-2 h-96 relative bg-gray-50">
//         {eventsToday.length > 0 ? (
//           eventsToday.map((event, index) => (
//             <div
//               key={index}
//               className="relative bg-blue-500 text-white p-2 rounded-lg shadow-md text-xs mb-2"
//               style={{
//                 top: `${(event.startPeriod - 1) * 40}px`,
//                 height: `${(event.endPeriod - event.startPeriod + 1) * 40}px`
//               }}
//             >
//               <div className="font-semibold">{event.name}</div>
//               <div>{event.teacher}</div>
//               <div>{event.classroom}</div>
//               <div>{event.startTime} - {event.endTime}</div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No events scheduled for today.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DayView;
