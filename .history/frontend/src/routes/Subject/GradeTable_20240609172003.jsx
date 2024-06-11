
import PropTypes from 'prop-types';

const GradeTable = ({ grades, assignments }) => {
  return (
    <div>
      <div className="border rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold">Grade table</h2>
        <table className="w-full mt-2 border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Inclass</th>
              <th className="border p-2">Midterm</th>
              <th className="border p-2">Final</th>
              <th className="border p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">{grades.inclass}</td>
              <td className="border p-2">{grades.midterm}</td>
              <td className="border p-2">{grades.final}</td>
              <td className="border p-2">{grades.total}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="border rounded-lg p-4">
        <h2 className="text-xl font-semibold">The assignment grade</h2>
        <table className="w-full mt-2 border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Assignment Name</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Grade</th>
              <th className="border p-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={index}>
                <td className="border p-2">{assignment.name}</td>
                <td className="border p-2">{assignment.date}</td>
                <td className="border p-2">{assignment.grade}</td>
                <td className="border p-2">{assignment.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

GradeTable.propTypes = {
  grades: PropTypes.shape({
    inclass: PropTypes.number.isRequired,
    midterm: PropTypes.number.isRequired,
    final: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  assignments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      grade: PropTypes.number.isRequired,
      notes: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GradeTable;
