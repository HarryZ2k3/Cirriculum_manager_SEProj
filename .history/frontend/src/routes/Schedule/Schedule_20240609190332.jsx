// import Transition from '../../utils/Transition'
// import FullCalendar from '@fullcalendar/react'; 
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction"; // Assuming you only need interaction plugin
// import timeGripPlugin from "@fullcalendar/timegrid";
// import * as bootstrap from "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Schedule.css";
// // Add other plugins as needed (e.g., timeGridPlugin)


// function Schedule () {
//     const events = [
//       {
//         title: "Web Application Development",
//         start: "2024-05-20T08:00:00",
//         end: "2024-05-20T11:25:00",
//         content: "Web Application Laborary</p><p>Teacher:N.T.Nghia</p><p>Room: ONLINE"
//       },
//       {
//         title: "Information System Management",
//         start: "2024-05-21T08:00:00",
//         end: "2024-05-21T10:30:00",
//         content: "204"
//       },
//       {
//         title: "Artificial Intelligence",
//         start: "2024-05-21T10:35:00",
//         end: "2024-05-21T13:05:00",
//         content: "204"
//       },
//       {
//         title: "Information System Management",
//         start: "2024-05-21T13:15:00",
//         end: "2024-05-21T15:45:00",
//         content: "204"
//       },
//       {
//         title: "Software Engineering",
//         start: "2024-05-23T08:00:00",
//         end: "2024-05-23T10:30:00",
//         content: "204"
//       },
//       {
//         title: "Web Application Development",
//         start: "2024-05-24T08:00:00",
//         end: "2024-05-24T10:30:00",
//         content: "204"
//       },
//       {
//         title: "Operating System",
//         start: "2024-05-24T10:35:00",
//         end: "2024-05-24T13:05:00",
//         content: "204"
//       },
//       {
//         title: "Operating System",
//         start: "2024-05-25T08:00:00",
//         end: "2024-05-25T10:30:00",
//         content: "204"
//       },
//       {
//         title: "Artificial Intelligence",
//         start: "2024-05-25T10:35:00",
//         end: "2024-05-25T13:05:00",
//         content: "204"
//       },
//       {
//         title: "Software Engineering",
//         start: "2024-05-25T13:15:00",
//         end: "2024-05-25T15:45:00",
//         content: "204"
//       },
//       //
//       {
//         title: "Web Application Development",
//         start: "2024-05-27T08:00:00",
//         end: "2024-05-27T11:25:00",
//         content: "204"
//       },
//       {
//         title: "Information System Management",
//         start: "2024-05-28T08:00:00",
//         end: "2024-05-28T10:30:00",
//         content: "204"
//       },
//       {
//         title: "Artificial Intelligence",
//         start: "2024-05-28T10:35:00",
//         end: "2024-05-28T13:05:00",
//         content: "204"
//       },
//       {
//         title: "Information System Management",
//         start: "2024-05-28T13:15:00",
//         end: "2024-05-28T15:45:00",
//         content: "204"
//       },
//       {
//         title: "Software Engineering",
//         start: "2024-05-30T08:00:00",
//         end: "2024-05-230T10:30:00",
//         content: "204"
//       },
//       {
//         title: "Web Application Development",
//         start: "2024-05-31T08:00:00",
//         end: "2024-05-31T10:30:00",
//         content: "204"
//       },
//       {
//         title: "Operating System",
//         start: "2024-05-31T10:35:00",
//         end: "2024-05-31T13:05:00",
//         content: "204"
//       },
//       {
//         title: "Operating System",
//         start: "2024-06-01T08:00:00",
//         end: "2024-06-01T10:30:00",
//         content: "204"
//       },
//       {
//         title: "Artificial Intelligence",
//         start: "2024-06-01T10:35:00",
//         end: "2024-06-01T13:05:00",
//         content: "204"
//       },
//       {
//         title: "Software Engineering",
//         start: "2024-06-01T13:15:00",
//         end: "2024-06-01T15:45:00",
//         content: "204"
//       }
//     ]
//     return (
//     <Transition className="bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100% overflow-y-auto">
      
//         <FullCalendar
//         plugins = {[dayGridPlugin, timeGripPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         headerToolbar={{
//           start: "today prev,next",
//           center: "title",
//           end: "dayGridMonth,timeGridWeek,timeGridDay", // Customize header buttons
//         }}
//         events={
//         //   [{ title: "Meeting", start: new Date("2024-05-24"), end: new Date("2024-05-25") },
//         //   // Add more event objects here
//         // ]
//         events
//       }
//         height="90vh" // Set the calendar height
//         eventDidMount={(info) => {
//           return new bootstrap.Popover(info.el, {
//             title: info.event.title,
//             placement: "auto",
//             trigger: "hover",
//             customClass: "popoverStyle",
//             // content: "<p>Subject: Software Engineering_G1_L1</p><p>Teacher: N.T.T.Loan</p><p>Room: A1.109</p>",
//             content:"<p>Web Application Laborary</p><p>Teacher:N.T.Nghia</p><p>Room: ONLINE</p>",
//             html: true,
//           });
//         }}
//         />
//     </Transition>
//   );
// }
// export default Schedule;

// import { useState } from 'react';
// import ScheduleView from './ScheduleView';
// import './Schedule.css';

// const Schedule = () => {
//   const [viewMode, setViewMode] = useState('month');

//   const handleViewChange = (mode) => {
//     setViewMode(mode);
//   };

//   return (
//     <div className="schedule-container">
//       <div className="schedule-header">
//         <button onClick={() => handleViewChange('month')}>Month</button>
//         <button onClick={() => handleViewChange('week')}>Week</button>
//         <button onClick={() => handleViewChange('day')}>Day</button>
//       </div>
//       <ScheduleView viewMode={viewMode} />
//     </div>
//   );
// };

// export default Schedule;


// import { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import { sampleClasses, semesters } from './Data';
// import SwitchButton from './SwitchButton';
// import ClassTooltip from './ClassTooltip';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import './Schedule.css';

// const localizer = momentLocalizer(moment);

// const Schedule = () => {
//   const [viewMode, setViewMode] = useState('month');
//   const [currentSemester, setCurrentSemester] = useState(semesters[0]);

//   const events = sampleClasses
//     .filter(cls => cls.semester === currentSemester)
//     .map(cls => ({
//       title: cls.name,
//       start: new Date(`2024-06-01T${cls.startTime}`),
//       end: new Date(`2024-06-01T${cls.endTime}`),
//       resource: cls
//     }));

//   const eventPropGetter = () => ({
//     style: {
//       backgroundColor: '#007bff',
//       color: 'white',
//       borderRadius: '4px',
//       padding: '5px'
//     }
//   });

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
//             event: ({ event }) => (
//               <div>
//                 {event.title}
//                 <ClassTooltip classInfo={event.resource} />
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
//     const rect = e.target.getBoundingClientRect();
//     setTooltipPosition({ top: rect.top + window.scrollY, left: rect.left + window.scrollX });
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
//           onSelectEvent={(event) => console.log(event)}
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
//                     style={{ top: tooltipPosition.top + 20, left: tooltipPosition.left + 20 }}
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

import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { sampleClasses, semesters } from './Data';
import SwitchButton from './SwitchButton';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Schedule.css';

const localizer = momentLocalizer(moment);

const Schedule = () => {
  const [viewMode, setViewMode] = useState('month');
  const [currentSemester, setCurrentSemester] = useState(semesters[0]);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const events = sampleClasses
    .filter(cls => cls.semester === currentSemester)
    .map(cls => ({
      title: cls.name,
      start: new Date(`2024-06-01T${cls.startTime}`),
      end: new Date(`2024-06-01T${cls.endTime}`),
      resource: cls,
    }));

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

  return (
    <div className="schedule-container">
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
