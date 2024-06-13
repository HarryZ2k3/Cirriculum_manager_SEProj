import React, { useState } from 'react';
import { sampleClasses } from './Data';
import MonthView from './MonthView';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Schedule = () => {
  const [view, setView] = useState('month');

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <button onClick={() => setView('month')} className={`px-4 py-2 ${view === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            Month
          </button>
          <button onClick={() => setView('week')} className={`px-4 py-2 ${view === 'week' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            Week
          </button>
          <button onClick={() => setView('day')} className={`px-4 py-2 ${view === 'day' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            Day
          </button>
        </div>
        <div>
          <button className="px-4 py-2 bg-gray-200">Today</button>
          <button className="px-4 py-2 bg-gray-200">Back</button>
          <button className="px-4 py-2 bg-gray-200">Next</button>
        </div>
      </div>
      {view === 'month' && <MonthView />}
      {view === 'week' && <WeekView />}
      {view === 'day' && <DayView />}
    </div>
  );
};

export default Schedule;
