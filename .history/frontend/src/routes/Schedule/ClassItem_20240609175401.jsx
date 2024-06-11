import { useState } from 'react';
import PropTypes from 'prop-types';
import './ClassItem.css';

const ClassItem = ({ classInfo }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="class-item"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="class-name">{classInfo.name}</div>
      {showTooltip && (
        <div className="class-tooltip">
          <p><strong>Subject:</strong> {classInfo.name}</p>
          <p><strong>Teacher:</strong> {classInfo.teacher}</p>
          <p><strong>Classroom:</strong> {classInfo.classroom}</p>
          <p><strong>Time:</strong> {classInfo.startTime} - {classInfo.endTime}</p>
        </div>
      )}
    </div>
  );
};

ClassItem.propTypes = {
  classInfo: PropTypes.shape({
    day: PropTypes.string.isRequired,
    startPeriod: PropTypes.number.isRequired,
    endPeriod: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    classroom: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClassItem;
