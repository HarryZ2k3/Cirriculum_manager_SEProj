import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClassTooltip from './ClassTooltip';
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
      {showTooltip && <ClassTooltip classInfo={classInfo} />}
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
    semester: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClassItem;
