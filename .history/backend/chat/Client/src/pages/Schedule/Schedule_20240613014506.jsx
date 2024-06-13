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


import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'tailwindcss/tailwind.css';

export const sampleClasses = [
  {
    day: 'Monday',
    startPeriod: 1,
    endPeriod: 2,
    name: 'Operating System',
    teacher: 'N.T.Nghia',
    classroom: 'ONLINE',
    startTime: '08:00',
    endTime: '10:30',
    semester: 'Semester 1',
  },
];

const Schedule = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState(sampleClasses);
  const [newEvent, setNewEvent] = useState({
    day: '',
    startPeriod: '',
    endPeriod: '',
    name: '',
    teacher: '',
    classroom: '',
    startTime: '',
    endTime: '',
    semester: '',
  });

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const addEvent = (e) => {
    e.preventDefault();
    setEvents([...events, newEvent]);
    setNewEvent({
      day: '',
      startPeriod: '',
      endPeriod: '',
      name: '',
      teacher: '',
      classroom: '',
      startTime: '',
      endTime: '',
      semester: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">

      <div className="flex justify-between mb-4">
        <Calendar onChange={handleDateChange} value={date} className="w-1/2" />
        <div className="w-1/2 ml-4">
          <h2 className="text-xl mb-2">Add New Event</h2>
          <form onSubmit={addEvent}>
            <div className="mb-2">
              <label className="block text-gray-700">Day:</label>
              <input
                type="text"
                name="day"
                value={newEvent.day}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Start Period:</label>
              <input
                type="number"
                name="startPeriod"
                value={newEvent.startPeriod}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">End Period:</label>
              <input
                type="number"
                name="endPeriod"
                value={newEvent.endPeriod}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={newEvent.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Teacher:</label>
              <input
                type="text"
                name="teacher"
                value={newEvent.teacher}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Classroom:</label>
              <input
                type="text"
                name="classroom"
                value={newEvent.classroom}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Start Time:</label>
              <input
                type="text"
                name="startTime"
                value={newEvent.startTime}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">End Time:</label>
              <input
                type="text"
                name="endTime"
                value={newEvent.endTime}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Semester:</label>
              <input
                type="text"
                name="semester"
                value={newEvent.semester}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Add Event</button>
          </form>
          <h2 className="text-xl mt-4">Events</h2>
          <ul>
            {events.map((event, index) => (
              <li key={index} className="mb-2">
                <strong>{event.day}</strong> - {event.name} ({event.startTime} - {event.endTime})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
