import 'react/prop-types';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import Transition from '../../utils/Transition';
import { Announcement, TodayClass } from './HomeComponents';

const SubjectList = ({ subjects, onSubjectClick }) => {
  return (
    <div>
      {subjects.map((subject) => (
        <div
          key={subject.id}
          className="cursor-pointer p-2 hover:bg-gray-200"
          onClick={() => onSubjectClick(subject.id)}
        >
          <h3 className="text-lg font-semibold">{subject.name}</h3>
          <p className="text-sm">{subject.teacher}</p>
        </div>
      ))}
    </div>
  );
};

export default SubjectList;
