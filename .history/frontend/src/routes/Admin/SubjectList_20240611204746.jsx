const subjects = [
  { id: 1, type: 'Theory', name: 'Computer Architecture_G1_L1' },
  { id: 2, type: 'Laboratory', name: 'Computer Architecture_G1_L1' },
  { id: 3, type: 'Theory', name: 'Computer Architecture_G1_L1' },
  // Add more subjects as needed
];

function SubjectList({ onSubjectClick }) {
  return (
    <div>
      {subjects.map((subject) => (
        <button 
          key={subject.id} 
          className="w-full bg-blue-100 p-4 mb-2 rounded text-left"
          onClick={() => onSubjectClick(subject)}
        >
          <div>Class: {subject.type}</div>
          <div>{subject.name}</div>
        </button>
      ))}
    </div>
  );
}

export default SubjectList;
