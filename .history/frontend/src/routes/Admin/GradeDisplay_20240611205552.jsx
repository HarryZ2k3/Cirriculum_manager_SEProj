import { useState } from 'react';
import { CSVLink } from 'react-csv';

function GradeDisplay({ data }) {
  const [editIdx, setEditIdx] = useState(-1);
  const [editData, setEditData] = useState([]);

  const handleEdit = (index) => {
    setEditIdx(index);
    setEditData([...data]);
  };

  const handleChange = (e, index, key) => {
    const newData = [...editData];
    newData[index][key] = e.target.value;
    setEditData(newData);
  };

  const handleSave = () => {
    // Add your save logic here (e.g., update the state, send to server, etc.)
    setEditIdx(-1);
  };

  if (!data) {
    return <div>No data available. Please upload a file.</div>;
  }

  return (
    <div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 text-left">StudentID</th>
            <th className="py-2 px-4 bg-gray-200 text-left">StudentName</th>
            <th className="py-2 px-4 bg-gray-200 text-left">Grade</th>
            <th className="py-2 px-4 bg-gray-200 text-left">Notes</th>
            <th className="py-2 px-4 bg-gray-200 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">
                {editIdx === index ? (
                  <input 
                    type="text" 
                    value={editData[index].StudentID} 
                    onChange={(e) => handleChange(e, index, 'StudentID')} 
                    className="border p-1"
                  />
                ) : (
                  student.StudentID
                )}
              </td>
              <td className="py-2 px-4 border">
                {editIdx === index ? (
                  <input 
                    type="text" 
                    value={editData[index].StudentName} 
                    onChange={(e) => handleChange(e, index, 'StudentName')} 
                    className="border p-1"
                  />
                ) : (
                  student.StudentName
                )}
              </td>
              <td className="py-2 px-4 border">
                {editIdx === index ? (
                  <input 
                    type="text" 
                    value={editData[index].Grade} 
                    onChange={(e) => handleChange(e, index, 'Grade')} 
                    className="border p-1"
                  />
                ) : (
                  student.Grade
                )}
              </td>
              <td className="py-2 px-4 border">
                {editIdx === index ? (
                  <input 
                    type="text" 
                    value={editData[index].Notes} 
                    onChange={(e) => handleChange(e, index, 'Notes')} 
                    className="border p-1"
                  />
                ) : (
                  student.Notes
                )}
              </td>
              <td className="py-2 px-4 border">
                {editIdx === index ? (
                  <button onClick={handleSave} className="bg-green-500 text-white p-1 rounded">Save</button>
                ) : (
                  <button onClick={() => handleEdit(index)} className="bg-blue-500 text-white p-1 rounded">Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CSVLink data={data} className="bg-blue-500 text-white p-2 rounded mt-4 inline-block">
        Export to CSV
      </CSVLink>
    </div>
  );
}

export default GradeDisplay;
