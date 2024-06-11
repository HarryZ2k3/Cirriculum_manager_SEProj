import React from 'react';

const subjects = [
  { id: 1, type: 'Theory', name: 'Computer Architecture_G1_L1' },
  { id: 2, type: 'Laboratory', name: 'Computer Architecture_G1_L1' },
  { id: 3, type: 'Theory', name: 'Computer Architecture_G1_L1' },
  // Add more subjects as needed
];

function SubjectList() {
  return (
    <div>
      {subjects.map((subject) => (
        <div key={subject.id} className="bg-blue-100 p-4 mb-2 rounded">
          <div>Class: {subject.type}</div>
          <div>{subject.name}</div>
        </div>
      ))}
    </div>
  );
}

export default SubjectList;
