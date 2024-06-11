import React from 'react';

const GradeTable = ({ grades, assignments }) => {
  return (
    <div>
      <div className="border rounded-lg p-4">
        <h2 className="text-xl font-semibold">Grade table</h2>
        <table className="w-full mt-2">
          <thead>
            <tr>
              <th>Inclass</th>
              <th>Midterm</th>
              <th>Final</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{grades.inclass}</td>
              <td>{grades.midterm}</td>
              <td>{grades.final}</td>
              <td>{grades.total}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="border rounded-lg p-4 mt-4">
        <h2 className="text-xl font-semibold">The assignment grade</h2>
        <table className="w-full mt-2">
          <thead>
            <tr>
              <th>Assignment Name</th>
              <th>Date</th>
              <th>Grade</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={index}>
                <td>{assignment.name}</td>
                <td>{assignment.date}</td>
                <td>{assignment.grade}</td>
                <td>{assignment.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradeTable;
