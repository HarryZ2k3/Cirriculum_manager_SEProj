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

import React, { useState } from 'react';

function UploadForm({ onDataUpload }) {
  const [file, setFile] = useState(null);
  const [uploadType, setUploadType] = useState('student_info');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTypeChange = (e) => {
    setUploadType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', uploadType);

    // Simulating data upload and extraction from Excel
    const simulatedData = [
      { StudentID: 'ITCSIU21204', StudentName: 'Nguyen Huynh Thao My', Numbers: '0911-855-722', Notes: '' },
      { StudentID: 'ITITWE22151', StudentName: 'Pham Ha Tri Duc', Numbers: '5621-690-420', Notes: '' }
    ];
    onDataUpload(simulatedData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
          Upload File
        </label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
          Upload Type
        </label>
        <select
          id="type"
          name="type"
          value={uploadType}
          onChange={handleTypeChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="student_info">Student Information</option>
          <option value="grades">Grades</option>
          <option value="announcement">Announcements</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Upload
      </button>
    </form>
  );
}

export default UploadForm;
