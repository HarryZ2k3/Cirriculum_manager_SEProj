import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EventTooltip from './ClassTooltip';
import { events } from './sampleData';
import PropTypes from 'prop-types';
import './ScheduleView.css';

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

  
//   .schedule-table th,
//   .schedule-table td {
//     border: 1px solid #ccc;
//     padding: 10px;
//     text-align: center;
//     vertical-align: top;
//   }
  
//   .schedule-table th {
//     background-color: #f0f0f0;
//   }
  
//   .class-item {
//     position: relative;
//     padding: 5px;
//     background-color: #e0f7fa;
//     border: 1px solid #006064;
//     cursor: pointer;
//     margin-top: 5px;
//   }
  
//   .class-tooltip {
//     position: absolute;
//     top: -10px;
//     left: 110%;
//     width: 200px;
//     padding: 10px;
//     background-color: #fff;
//     border: 1px solid #ccc;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//     z-index: 10;
//   }
  
//   .schedule-table {
//     width: 100%;
//     border-collapse: collapse;
//     table-layout: fixed;
//   }
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
