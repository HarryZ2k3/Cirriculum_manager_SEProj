import React from 'react';

function DataDisplay({ data }) {
  if (!data) {
    return <div>No data available. Please upload a file.</div>;
  }

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 bg-gray-200 text-left">StudentID</th>
          <th className="py-2 px-4 bg-gray-200 text-left">StudentName</th>
          <th className="py-2 px-4 bg-gray-200 text-left">Numbers</th>
          <th className="py-2 px-4 bg-gray-200 text-left">Notes</th>
        </tr>
      </thead>
      <tbody>
        {data.map((student, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border">{student.StudentID}</td>
            <td className="py-2 px-4 border">{student.StudentName}</td>
            <td className="py-2 px-4 border">{student.Numbers}</td>
            <td className="py-2 px-4 border">{student.Notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataDisplay;
