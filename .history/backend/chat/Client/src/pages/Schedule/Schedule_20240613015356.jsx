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


import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { sampleClasses, semesters } from './Data';
import SwitchButton from './SwitchButton';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Schedule.css';
import 'tailwindcss/tailwind.css';

const localizer = momentLocalizer(moment);

const periodToTime = (period) => {
  const startOfDay = moment().startOf('day');
  return startOfDay.add(period * 4, 'minutes').toDate();
};

const Schedule = () => {
  const [viewMode, setViewMode] = useState('month');
  const [currentSemester, setCurrentSemester] = useState(semesters[0]);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const events = sampleClasses
    .filter(cls => cls.semester === currentSemester)
    .map(cls => {
      const start = periodToTime(cls.startPeriod);
      const end = periodToTime(cls.endPeriod);
      return {
        title: cls.name,
        start,
        end,
        resource: cls,
      };
    });

  const eventPropGetter = () => ({
    style: {
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '4px',
      padding: '5px',
      transition: 'transform 0.2s',
    }
  });

  const onEventMouseEnter = (event, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    setHoveredEvent(event);
  };

  const onEventMouseLeave = () => {
    setHoveredEvent(null);
  };

  const CustomTimeSlotWrapper = ({ children, value }) => {
    const period = moment(value).diff(moment().startOf('day'), 'minutes') / 45;
    return (
      <div className="rbc-time-slot">
        {period >= 1 && period <= 12 ? `Period ${period}` : children}
      </div>
    );
  };

  return (
    <div className="schedule-container">
      <header className="bg-blue-500 text-white p-4 rounded mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl">INTERNATIONAL UNIVERSITY</h1>
          <p>Ho Chi Minh City</p>
        </div>
        <nav className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-200 rounded">Home</button>
          <button className="px-4 py-2 bg-blue-200 rounded">Chat</button>
          <button className="px-4 py-2 bg-blue-200 rounded">Subject</button>
          <button className="px-4 py-2 bg-blue-200 rounded">Schedule</button>
        </nav>
      </header>
      <div className="controls">
        <SwitchButton
          options={['month', 'week', 'day']}
          selectedOption={viewMode}
          onSelect={setViewMode}
        />
        <SwitchButton
          options={semesters}
          selectedOption={currentSemester}
          onSelect={setCurrentSemester}
        />
      </div>
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={['month', 'week', 'day']}
          view={viewMode}
          onView={setViewMode}
          eventPropGetter={eventPropGetter}
          components={{
            timeSlotWrapper: CustomTimeSlotWrapper,
            eventWrapper: ({ event, children }) => (
              <div
                onMouseEnter={(e) => onEventMouseEnter(event, e)}
                onMouseLeave={onEventMouseLeave}
                style={{ position: 'relative' }}
              >
                {children}
                {hoveredEvent && hoveredEvent === event && (
                  <div
                    className="event-tooltip"
                    style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
                  >
                    <p><strong>Subject:</strong> {event.resource.name}</p>
                    <p><strong>Teacher:</strong> {event.resource.teacher}</p>
                    <p><strong>Classroom:</strong> {event.resource.classroom}</p>
                    <p><strong>Time:</strong> {event.resource.startTime} - {event.resource.endTime}</p>
                  </div>
                )}
              </div>
            )
          }}
        />
      </div>
    </div>
  );
};

export default Schedule;
