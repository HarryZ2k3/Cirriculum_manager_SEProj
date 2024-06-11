// import { useState } from 'react';

// function UploadForm() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('file', selectedFile);

//     // Replace with your upload URL
//     fetch('your_upload_endpoint', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Success:', data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
//           Upload File
//         </label>
//         <input
//           type="file"
//           id="file"
//           name="file"
//           onChange={handleFileChange}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
//           Upload Type
//         </label>
//         <select
//           id="type"
//           name="type"
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         >
//           <option value="student_info">Student Information</option>
//           <option value="grades">Grades</option>
//           <option value="announcements">Announcements</option>
//         </select>
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//       >
//         Upload
//       </button>
//     </form>
//   );
// }

// export default UploadForm;

// import { useState } from 'react';

// function parseCSV(text) {
//   const lines = text.split('\n');
//   const headers = lines[0].split(',').map(header => header.trim());
//   const data = lines.slice(1).map(line => {
//     const values = line.split(',').map(value => value.trim());
//     return headers.reduce((object, header, index) => {
//       object[header] = values[index];
//       return object;
//     }, {});
//   });
//   return data;
// }

// function UploadForm({ onDataUpload }) {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const text = event.target.result;
//         const data = parseCSV(text);
//         onDataUpload(data);
//       };
//       reader.readAsText(file);
//     }
//   };

//   return (
//     <div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
//           Upload File
//         </label>
//         <input
//           type="file"
//           id="file"
//           accept=".csv"
//           onChange={handleFileChange}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <button onClick={handleUpload} className="bg-blue-500 text-white p-2 rounded">
//         Upload
//       </button>
//     </div>
//   );
// }

// export default UploadForm;

import React, { useState } from 'react';

function parseCSV(text) {
  const lines = text.split('\n');
  const headers = lines[0].split(',').map(header => header.trim());
  const data = lines.slice(1).map(line => {
    const values = line.split(',').map(value => value.trim());
    return headers.reduce((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {});
  });
  return data;
}

function UploadForm({ onDataUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        const data = parseCSV(text);
        onDataUpload(data);
      };
      reader.readAsText(file);
   
