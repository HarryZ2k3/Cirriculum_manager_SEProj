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

import { useState } from 'react';
import ClassItem from './ClassItem';
import { sampleClasses, days, periods, semesters } from './Data';
import SwitchButton from './SwitchButton';
import './Schedule.css';

const Schedule = () => {
  const [viewMode, setViewMode] = useState('month');
  const [currentSemester, setCurrentSemester] = useState(semesters[0]);

  return (
    <Transition className="bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100% overflow-y-auto">
        <div className="flex flex-col ">
        padding: 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: auto;
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
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Period</th>
                {days.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {periods.map((period) => (
                <tr key={period}>
                  <td>{`Period ${period}`}</td>
                  {days.map((day) => (
                    <td key={day}>
                      {sampleClasses
                        .filter(
                          (cls) =>
                            cls.day === day &&
                            cls.startPeriod <= period &&
                            cls.endPeriod >= period &&
                            cls.semester === currentSemester
                        )
                        .map((cls, index) => (
                          <ClassItem key={index} classInfo={cls} />
                        ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </Transition>
  );
};

export default Schedule;
