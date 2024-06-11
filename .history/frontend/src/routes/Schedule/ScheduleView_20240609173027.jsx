import from 'react';
import EventTooltip from './EventTooltip';
import { events } from './sampleData'; // Import your sample data

const ScheduleView = ({ viewMode }) => {
  return (
    <div className={`schedule-view ${viewMode}`}>
      {events.map((event, index) => (
        <div key={index} className="event" style={{ top: event.time * 50 }}>
          <EventTooltip event={event}>
            <div className="event-item">
              <span>{event.name}</span>
            </div>
          </EventTooltip>
        </div>
      ))}
    </div>
  );
};

export default ScheduleView;
