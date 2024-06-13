// import { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import { sampleClasses, semesters } from './Data';
// import SwitchButton from './SwitchButton';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import './Schedule.css';

// const localizer = momentLocalizer(moment);

// const Schedule = () => {
//   const [viewMode, setViewMode] = useState('month');
//   const [currentSemester, setCurrentSemester] = useState(semesters[0]);
//   const [hoveredEvent, setHoveredEvent] = useState(null);
//   const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

//   const events = sampleClasses
//     .filter(cls => cls.semester === currentSemester)
//     .map(cls => ({
//       title: cls.name,
//       start: new Date(`2024-06-01T${cls.startTime}`),
//       end: new Date(`2024-06-01T${cls.endTime}`),
//       resource: cls,
//     }));

//   const eventPropGetter = () => ({
//     style: {
//       backgroundColor: '#007bff',
//       color: 'white',
//       borderRadius: '4px',
//       padding: '5px',
//       transition: 'transform 0.2s',
//     }
//   });

//   const onEventMouseEnter = (event, e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setTooltipPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
//     setHoveredEvent(event);
//   };

//   const onEventMouseLeave = () => {
//     setHoveredEvent(null);
//   };

//   return (
//     <div className="schedule-container">
//       <div className="controls">
//         <SwitchButton
//           options={['month', 'week', 'day']}
//           selectedOption={viewMode}
//           onSelect={setViewMode}
//         />
//         <SwitchButton
//           options={semesters}
//           selectedOption={currentSemester}
//           onSelect={setCurrentSemester}
//         />
//       </div>
//       <div className="calendar-container">
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           views={['month', 'week', 'day']}
//           view={viewMode}
//           onView={setViewMode}
//           eventPropGetter={eventPropGetter}
//           components={{
//             eventWrapper: ({ event, children }) => (
//               <div
//                 onMouseEnter={(e) => onEventMouseEnter(event, e)}
//                 onMouseLeave={onEventMouseLeave}
//                 style={{ position: 'relative' }}
//               >
//                 {children}
//                 {hoveredEvent && hoveredEvent === event && (
//                   <div
//                     className="event-tooltip"
//                     style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
//                   >
//                     <p><strong>Subject:</strong> {event.resource.name}</p>
//                     <p><strong>Teacher:</strong> {event.resource.teacher}</p>
//                     <p><strong>Classroom:</strong> {event.resource.classroom}</p>
//                     <p><strong>Time:</strong> {event.resource.startTime} - {event.resource.endTime}</p>
//                   </div>
//                 )}
//               </div>
//             )
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Schedule;

// import { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import { sampleClasses, semesters } from './Data';
// import SwitchButton from './SwitchButton';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import './Schedule.css';
// import 'tailwindcss/tailwind.css';

// const localizer = momentLocalizer(moment);

// const Schedule = () => {
//   const [viewMode, setViewMode] = useState('month');
//   const [currentSemester, setCurrentSemester] = useState(semesters[0]);
//   const [hoveredEvent, setHoveredEvent] = useState(null);
//   const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

//   const events = sampleClasses
//     .filter(cls => cls.semester === currentSemester)
//     .map(cls => {
//       const day = moment().day(cls.day).startOf('day');
//       const start = day.clone().add(cls.startPeriod * 45, 'minutes');
//       const end = start.clone().add((cls.endPeriod - cls.startPeriod) * 45, 'minutes');
//       return {
//         title: cls.name,
//         start: start.toDate(),
//         end: end.toDate(),
//         resource: cls,
//       };
//     });

//   const eventPropGetter = () => ({
//     style: {
//       backgroundColor: '#007bff',
//       color: 'white',
//       borderRadius: '4px',
//       padding: '5px',
//       transition: 'transform 0.2s',
//     }
//   });

//   const onEventMouseEnter = (event, e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setTooltipPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
//     setHoveredEvent(event);
//   };

//   const onEventMouseLeave = () => {
//     setHoveredEvent(null);
//   };

//   return (
//     <div className="schedule-container">
//       <div className="controls">
//         <SwitchButton
//           options={['month', 'week', 'day']}
//           selectedOption={viewMode}
//           onSelect={setViewMode}
//         />
//         <SwitchButton
//           options={semesters}
//           selectedOption={currentSemester}
//           onSelect={setCurrentSemester}
//         />
//       </div>
//       <div className="calendar-container">
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           views={['month', 'week', 'day']}
//           view={viewMode}
//           onView={setViewMode}
//           eventPropGetter={eventPropGetter}
//           components={{
//             eventWrapper: ({ event, children }) => (
//               <div
//                 onMouseEnter={(e) => onEventMouseEnter(event, e)}
//                 onMouseLeave={onEventMouseLeave}
//                 style={{ position: 'relative' }}
//               >
//                 {children}
//                 {hoveredEvent && hoveredEvent === event && (
//                   <div
//                     className="event-tooltip"
//                     style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
//                   >
//                     <p><strong>Subject:</strong> {event.resource.name}</p>
//                     <p><strong>Teacher:</strong> {event.resource.teacher}</p>
//                     <p><strong>Classroom:</strong> {event.resource.classroom}</p>
//                     <p><strong>Time:</strong> {event.resource.startTime} - {event.resource.endTime}</p>
//                   </div>
//                 )}
//               </div>
//             )
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Schedule;


// import { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import { sampleClasses, semesters } from './Data';
// import SwitchButton from './SwitchButton';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import './Schedule.css';
// import 'tailwindcss/tailwind.css';

// const localizer = momentLocalizer(moment);

// const periodToTime = (period) => {
//   const startOfDay = moment().startOf('day');
//   return startOfDay.add(period * 45, 'minutes').toDate();
// };

// const Schedule = () => {
//   const [viewMode, setViewMode] = useState('month');
//   const [currentSemester, setCurrentSemester] = useState(semesters[0]);
//   const [hoveredEvent, setHoveredEvent] = useState(null);
//   const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

//   const events = sampleClasses
//     .filter(cls => cls.semester === currentSemester)
//     .map(cls => {
//       const start = periodToTime(cls.startPeriod);
//       const end = periodToTime(cls.endPeriod);
//       return {
//         title: cls.name,
//         start,
//         end,
//         resource: cls,
//       };
//     });a

//   const eventPropGetter = () => ({
//     style: {
//       backgroundColor: '#007bff',
//       color: 'white',
//       borderRadius: '4px',
//       padding: '5px',
//       transition: 'transform 0.2s',
//     }
//   });

//   const onEventMouseEnter = (event, e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setTooltipPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
//     setHoveredEvent(event);
//   };

//   const onEventMouseLeave = () => {
//     setHoveredEvent(null);
//   };

//   const CustomTimeSlotWrapper = ({ children, value }) => {
//     const period = moment(value).diff(moment().startOf('day'), 'minutes') / 45;
//     return (
//       <div className="rbc-time-slot">
//         {period >= 1 && period <= 12 ? `Period ${period}` : children}
//       </div>
//     );
//   };

//   return (
//     <div className="schedule-container">

//       <div className="controls">
//         <SwitchButton
//           options={['month', 'week', 'day']}
//           selectedOption={viewMode}
//           onSelect={setViewMode}
//         />
//         <SwitchButton
//           options={semesters}
//           selectedOption={currentSemester}
//           onSelect={setCurrentSemester}
//         />
//       </div>
//       <div className="calendar-container">
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           views={['month', 'week', 'day']}
//           view={viewMode}
//           onView={setViewMode}
//           eventPropGetter={eventPropGetter}
//           components={{
//             timeSlotWrapper: CustomTimeSlotWrapper,
//             eventWrapper: ({ event, children }) => (
//               <div
//                 onMouseEnter={(e) => onEventMouseEnter(event, e)}
//                 onMouseLeave={onEventMouseLeave}
//                 style={{ position: 'relative' }}
//               >
//                 {children}
//                 {hoveredEvent && hoveredEvent === event && (
//                   <div
//                     className="event-tooltip"
//                     style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
//                   >
//                     <p><strong>Subject:</strong> {event.resource.name}</p>
//                     <p><strong>Teacher:</strong> {event.resource.teacher}</p>
//                     <p><strong>Classroom:</strong> {event.resource.classroom}</p>
//                     <p><strong>Time:</strong> {event.resource.startTime} - {event.resource.endTime}</p>
//                   </div>
//                 )}
//               </div>
//             )
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Schedule;


// import React, { useState } from 'react';
// import { sampleClasses } from './Data';

// const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// const Schedule = () => {
//   const [view, setView] = useState('month');

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <button onClick={() => setView('month')} className={`px-4 py-2 ${view === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
//             Month
//           </button>
//           <button onClick={() => setView('week')} className={`px-4 py-2 ${view === 'week' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
//             Week
//           </button>
//           <button onClick={() => setView('day')} className={`px-4 py-2 ${view === 'day' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
//             Day
//           </button>
//         </div>
//         <div>
//           <button className="px-4 py-2 bg-gray-200">Today</button>
//           <button className="px-4 py-2 bg-gray-200">Back</button>
//           <button className="px-4 py-2 bg-gray-200">Next</button>
//         </div>
//       </div>
//       {view === 'month' && <MonthView />}
//       {view === 'week' && <WeekView />}
//       {view === 'day' && <DayView />}
//     </div>
//   );
// };

// const MonthView = () => (
//   <div className="bg-white p-4 rounded shadow">
//     <h2 className="text-lg font-bold mb-4">Month View</h2>
//     {/* Month view content here */}
//   </div>
// );

// const WeekView = () => (
//   <div className="bg-white p-4 rounded shadow">
//     <h2 className="text-lg font-bold mb-4">Week View</h2>
//     <div className="grid grid-cols-7 gap-2">
//       {daysOfWeek.map(day => (
//         <div key={day} className="border p-2">
//           <h3 className="font-bold">{day}</h3>
//           <div className="relative h-96">
//             {sampleClasses.filter(event => event.day === day).map((event, index) => (
//               <div
//                 key={index}
//                 className="absolute bg-blue-500 text-white p-2 rounded"
//                 style={{
//                   top: `${(event.startPeriod - 1) * 40}px`,
//                   height: `${(event.endPeriod - event.startPeriod + 1) * 40}px`
//                 }}
//               >
//                 <div>{event.name}</div>
//                 <div>{event.teacher}</div>
//                 <div>{event.classroom}</div>
//                 <div>{event.startTime} - {event.endTime}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const DayView = () => (
//   <div className="bg-white p-4 rounded shadow">
//     <h2 className="text-lg font-bold mb-4">Day View</h2>
//     <div className="grid grid-cols-1 gap-2">
//       {daysOfWeek.map(day => (
//         <div key={day} className="border p-2">
//           <h3 className="font-bold">{day}</h3>
//           <div className="relative h-96">
//             {sampleClasses.filter(event => event.day === day).map((event, index) => (
//               <div
//                 key={index}
//                 className="absolute bg-blue-500 text-white p-2 rounded"
//                 style={{
//                   top: `${(event.startPeriod - 1) * 40}px`,
//                   height: `${(event.endPeriod - event.startPeriod + 1) * 40}px`
//                 }}
//               >
//                 <div>{event.name}</div>
//                 <div>{event.teacher}</div>
//                 <div>{event.classroom}</div>
//                 <div>{event.startTime} - {event.endTime}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default Schedule;

import React, { useState } from 'react';
import { sampleClasses } from './Data';
import MonthView from './MonthView';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Schedule = () => {
  const [view, setView] = useState('month');

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <button onClick={() => setView('month')} className={`px-4 py-2 ${view === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            Month
          </button>
          <button onClick={() => setView('week')} className={`px-4 py-2 ${view === 'week' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            Week
          </button>
          <button onClick={() => setView('day')} className={`px-4 py-2 ${view === 'day' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            Day
          </button>
        </div>
        <div>
          <button className="px-4 py-2 bg-gray-200">Today</button>
          <button className="px-4 py-2 bg-gray-200">Back</button>
          <button className="px-4 py-2 bg-gray-200">Next</button>
        </div>
      </div>
      {view === 'month' && <MonthView />}
      {view === 'week' && <WeekView />}
      {view === 'day' && <DayView />}
    </div>
  );
};

export default Schedule;
