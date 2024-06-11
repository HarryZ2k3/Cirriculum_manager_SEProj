import { useState } from 'react';
import PropTypes from 'prop-types';
import Popover from 'react-tiny-popover';
import './ClassPopover.css';

const ClassPopover = ({ classInfo, children }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={['top', 'right']} // preferred positions
      content={
        <div className="popover-content">
          <p><strong>Subject:</strong> {classInfo.name}</p>
          <p><strong>Teacher:</strong> {classInfo.teacher}</p>
          <p><strong>Classroom:</strong> {classInfo.classroom}</p>
          <p><strong>Time:</strong> {classInfo.startTime} - {classInfo.endTime}</p>
        </div>
      }
    >
      <div
        className="class-item"
        onMouseEnter={() => setIsPopoverOpen(true)}
        onMouseLeave={() => setIsPopoverOpen(false)}
      >
        {children}
      </div>
    </Popover>
  );
};

ClassPopover.propTypes = {
  classInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    classroom: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default ClassPopover;
