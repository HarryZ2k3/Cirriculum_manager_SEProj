import { useState } from 'react';
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
