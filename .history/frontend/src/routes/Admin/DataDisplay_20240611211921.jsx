// import { useState } from 'react';
// import { CSVLink } from 'react-csv';

// function DataDisplay({ data }) {
//   const [editIdx, setEditIdx] = useState(-1);
//   const [editData, setEditData] = useState([]);
//   const [currentData, setCurrentData] = useState(data);

//   const handleEdit = (index) => {
//     setEditIdx(index);
//     setEditData([...currentData]);
//   };

//   const handleChange = (e, index, key) => {
//     const newData = [...editData];
//     newData[index][key] = e.target.value;
//     setEditData(newData);
//   };

//   const handleSave = () => {
//     setCurrentData(editData);
//     setEditIdx(-1);
//   };

//   const handleCancel = () => {
//     setEditIdx(-1);
//     setEditData([...currentData]);
//   };

//   const handleExport = () => {
//     // Optional: Add custom export logic if needed
//   };

//   if (!data) {
//     return <div>No data available. Please upload a file.</div>;
//   }

//   return (
//     <div>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 bg-gray-200 text-left border">StudentID</th>
//             <th className="py-2 px-4 bg-gray-200 text-left border">StudentName</th>
//             <th className="py-2 px-4 bg-gray-200 text-left border">Numbers</th>
//             <th className="py-2 px-4 bg-gray-200 text-left border">Notes</th>
//             <th className="py-2 px-4 bg-gray-200 text-left border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentData.map((student, index) => (
//             <tr key={index} className={`hover:bg-gray-100 ${editIdx === index ? 'bg-gray-50' : ''}`}>
//               <td className="py-2 px-4 border">
//                 {editIdx === index ? (
//                   <input 
//                     type="text" 
//                     value={editData[index].StudentID} 
//                     onChange={(e) => handleChange(e, index, 'StudentID')} 
//                     className="border p-1 w-full"
//                   />
//                 ) : (
//                   student.StudentID
//                 )}
//               </td>
//               <td className="py-2 px-4 border">
//                 {editIdx === index ? (
//                   <input 
//                     type="text" 
//                     value={editData[index].StudentName} 
//                     onChange={(e) => handleChange(e, index, 'StudentName')} 
//                     className="border p-1 w-full"
//                   />
//                 ) : (
//                   student.StudentName
//                 )}
//               </td>
//               <td className="py-2 px-4 border">
//                 {editIdx === index ? (
//                   <input 
//                     type="text" 
//                     value={editData[index].Numbers} 
//                     onChange={(e) => handleChange(e, index, 'Numbers')} 
//                     className="border p-1 w-full"
//                   />
//                 ) : (
//                   student.Numbers
//                 )}
//               </td>
//               <td className="py-2 px-4 border">
//                 {editIdx === index ? (
//                   <input 
//                     type="text" 
//                     value={editData[index].Notes} 
//                     onChange={(e) => handleChange(e, index, 'Notes')} 
//                     className="border p-1 w-full"
//                   />
//                 ) : (
//                   student.Notes
//                 )}
//               </td>
//               <td className="py-2 px-4 border">
//                 {editIdx === index ? (
//                   <div>
//                     <button onClick={handleSave} className="bg-green-500 text-white p-1 rounded mr-2">Save</button>
//                     <button onClick={handleCancel} className="bg-red-500 text-white p-1 rounded">Cancel</button>
//                   </div>
//                 ) : (
//                   <button onClick={() => handleEdit(index)} className="bg-blue-500 text-white p-1 rounded">Edit</button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <CSVLink 
//         data={currentData} 
//         onClick={handleExport} 
//         className="bg-blue-500 text-white p-2 rounded mt-4 inline-block"
//       >
//         Export to CSV
//       </CSVLink>
//     </div>
//   );
// }

// export default DataDisplay;

// import { useState } from 'react';
// import { CSVLink } from 'react-csv';

// function DataDisplay({ subject, data }) {
//   const [editIdx, setEditIdx] = useState(-1);
//   const [editData, setEditData] = useState([]);
//   const [currentData, setCurrentData] = useState(data);

//   const handleEdit = (index) => {
//     setEditIdx(index);
//     setEditData([...currentData]);
//   };

//   const handleChange = (e, index, key) => {
//     const newData = [...editData];
//     newData[index][key] = e.target.value;
//     setEditData(newData);
//   };

//   const handleSave = () => {
//     setCurrentData(editData);
//     setEditIdx(-1);
//   };

//   const handleCancel = () => {
//     setEditIdx(-1);
//     setEditData([...currentData]);
//   };

//   if (!subject || !data || data.length === 0) {
//     return <div>No data available. Please upload a file or select a subject.</div>;
//   }

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">{subject.name}</h2>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 bg-gray-200 text-left border">StudentID</th>
//             <th className="py-2 px-4 bg-gray-200 text-left border">StudentName</th>
//             <th className="py-2 px-4 bg-gray-200 text-left border">Numbers</th>
//             <th className="py-2 px-4 bg-gray-200 text-left border">Notes</th>
//             <th className="py-2 px-4 bg-gray-200 text-left border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentData.map((student, index) => (
//             <tr key={index} className={`hover:bg-gray-100 ${editIdx === index ? 'bg-gray-50' : ''}`}>
//               <td className="py-2 px-4 border">
//                 {editIdx === index ? (
//                   <input 
//                     type="text" 
//                     value={editData[index].StudentID} 
//                     onChange={(e) => handleChange(e, index, 'StudentID')} 
//                     className="border p-1 w-full"
//                   />
//                 ) : (
//                   student.StudentID
//                 )}
//               </td>
//               <td className="py-2 px-4 border">
//                 {editIdx === index ? (
//                   <input 
//                     type="text" 
//                     value={editData[index].StudentName} 
//                     onChange={(e) => handleChange(e, index, 'StudentName')} 
//                     className="border p-1 w-full"
//                   />
//                 ) : (
//                   student.StudentName
//                 )}
//               </td>
//               <td className="py-2 px-4 border">
//                 {editIdx === index ? (
//                   <input 
//                     type="text" 
//                     value={editData[index].Numbers} 
//                     onChange={(e) => handleChange(e, index, 'Numbers')} 
//                     className="border p-1 w-full"
//                   />
//                 ) : (
//                   student.Numbers
//                 )}
//               </td>
//               <td className="py-2 px-4 border">
//                 {editIdx === index ? (
//                   <input 
//                     type="text" 
//                     value={editData[index].Notes} 
//                     onChange={(e) => handleChange(e, index, 'Notes')} 
//                     className="border p-1 w-full"
//                   />
//                 ) : (
//                   student.Notes
//                 )}
//               </td>
//               <td className="py-2 px-4 border">
//                 {editIdx === index ? (
//                   <div>
//                     <button onClick={handleSave} className="bg-green-500 text-white p-1 rounded mr-2">Save</button>
//                     <button onClick={handleCancel} className="bg-red-500 text-white p-1 rounded">Cancel</button>
//                   </div>
//                 ) : (
//                   <button onClick={() => handleEdit(index)} className="bg-blue-500 text-white p-1 rounded">Edit</button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <CSVLink 
//         data={currentData} 
//         className="bg-blue-500 text-white p-2 rounded mt-4 inline-block"
//       >
//         Export to CSV
//       </CSVLink>
//     </div>
//   );
// }

// export default DataDisplay;
