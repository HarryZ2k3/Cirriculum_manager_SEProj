import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EventTooltip from './EventTooltip';
import { events } from './sampleData';
import './ScheduleView.css'; // Assuming you have a CSS file for custom styles

const ScheduleView = ({ viewMode }) => {
  const [value, setValue] = useState(new Date());

  const onDateChange = (date) => {
    setValue(date);
  };

  const renderEvents = (date) => {
    const dayEvents = events.filter(
      (event) => new Date(event.day).toDateString() === date.toDateString()
    );
    return dayEvents.map((event, index) => (
      <EventTooltip key={index} event={event}>
        <div className="event-item">
          <span>{event.name}</span>
        </div>
      </EventTooltip>
    ));
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      return <div className="event-container">{renderEvents(date)}</div>;
    }
  };

  return (
    <div className="schedule-view">
      <Calendar
        onChange={onDateChange}
        value={value}
        view={viewMode}
        tileContent={tileContent}
      />
      {viewMode === 'day' && (
        <div className="day-view">
          <h2>Schedule for {value.toDateString()}</h2>
          {renderEvents(value)}
        </div>
      )}
    </div>
  );
};

export default ScheduleView;