function DataDisplay({ data }) {
  if (!data) {
    return <p>No data to display.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">StudentID</th>
            <th className="px-4 py-2">StudentName</th>
            <th className="px-4 py-2">Numbers</th>
            <th className="px-4 py-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{student.StudentID}</td>
              <td className="border px-4 py-2">{student.StudentName}</td>
              <td className="border px-4 py-2">{student.Numbers}</td>
              <td className="border px-4 py-2">{student.Notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataDisplay;
