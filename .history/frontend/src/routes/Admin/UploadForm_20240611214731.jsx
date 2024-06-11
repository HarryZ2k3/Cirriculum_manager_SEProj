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

// import React, { useState } from 'react';

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
//   const [error, setError] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setError(null); // Clear any existing error
//   };

//   const handleUpload = () => {
//     if (!file) {
//       setError('Please select a file to upload.');
//       return;
//     }

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const text = event.target.result;
//       const data = parseCSV(text);
//       onDataUpload(data);
//       setUploading(false); // Stop the uploading animation
//       setFile(null); // Clear the file input
//     };

//     reader.onerror = () => {
//       setError('Failed to read file. Please try again.');
//       setUploading(false); // Stop the uploading animation
//     };

//     setUploading(true); // Start the uploading animation
//     reader.readAsText(file);
//   };

//   return (
//     <div className="p-4 bg-white shadow rounded-lg">
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
//         {file && (
//           <div className="mt-2 text-sm text-gray-600">
//             Selected file: {file.name}
//           </div>
//         )}
//       </div>
//       {error && (
//         <div className="mb-4 text-red-500 text-sm">
//           {error}
//         </div>
//       )}
//       <button
//         onClick={handleUpload}
//         className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline ${uploading ? 'cursor-not-allowed opacity-50' : ''}`}
//         disabled={uploading}
//       >
//         {uploading ? 'Uploading...' : 'Upload'}
//       </button>
//     </div>
//   );
// }

// export default UploadForm;
