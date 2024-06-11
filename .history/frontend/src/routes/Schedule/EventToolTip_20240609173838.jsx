import { useState } from 'react';
import PropTypes from 'prop-types';

const EventTooltip = ({ event, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className="tooltip-content">
          <h4>{event.name}</h4>
          <p>Teacher: {event.teacher}</p>
          <p>Room: {event.room}</p>
          <p>Time: {event.time}</p>
        </div>
      )}
    </div>
  );
};

EventTooltip.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default EventTooltip;
