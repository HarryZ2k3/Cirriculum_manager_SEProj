import PropTypes from 'prop-types';

const SubjectList = ({ subjects, onSubjectClick }) => {
  return (
    <div>
      {subjects.map((subject) => (
        <div
          key={subject.id}
          className="cursor-pointer p-2 hover:bg-gray-200 rounded-md"
          onClick={() => onSubjectClick(subject.id)}
        >
          <h3 className="text-lg font-semibold">{subject.name}</h3>
          <p className="text-sm text-gray-600">{subject.teacher}</p>
        </div>
      ))}
    </div>
  );
};

SubjectList.propTypes = {
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      teacher: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSubjectClick: PropTypes.func.isRequired,
};

export default SubjectList;
