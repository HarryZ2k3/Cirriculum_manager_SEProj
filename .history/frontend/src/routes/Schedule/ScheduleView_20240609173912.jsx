import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EventTooltip from './EventToolTip';
import { events } from './sampleData';
import PropTypes from 'prop-types';
import './ScheduleView.css';

const ScheduleView = ({ viewMode }) => {
  const [value, setValue] = useState(new Date());

  // Handle date changes in the calendar
  const onDateChange = (date) => {
    setValue(date);
  };

  // Render events for a specific date
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

  // Customize the content for each calendar tile
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

ScheduleView.propTypes = {
  viewMode: PropTypes.oneOf(['month', 'week', 'day']).isRequired,
};

export default ScheduleView;
