
// const subjects = [
//   { name: 'Computer Architecture_G1_L1', type: 'Theory' },
//   { name: 'Computer Architecture_G1_L1', type: 'Laboratory' },
//   // Add more subjects as needed
// ];

// function SubjectList({ onSubjectClick }) {
//   return (
//     <div>
//       {subjects.map((subject, index) => (
//         <button
//           key={index}
//           onClick={() => onSubjectClick(subject)}
//           className="w-full text-left p-4 mb-2 bg-blue-100 hover:bg-blue-200 rounded"
//         >
//           <div className="font-bold">Class: {subject.type}</div>
//           <div>{subject.name}</div>
//         </button>
//       ))}
//     </div>
//   );
// }

// export default SubjectList;


// function SubjectList({ subjects, onSubjectClick }) {
//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">List of Registered Subjects</h2>
//       <div className="space-y-2">
//         {subjects.map((subject) => (
//           <button
//             key={subject.id}
//             onClick={() => onSubjectClick(subject)}
//             className="block w-full p-4 bg-gray-200 rounded shadow hover:bg-gray-300"
//           >
//             <div className="text-left">
//               <div className="font-semibold">Class: {subject.type}</div>
//               <div>{subject.name}</div>
//             </div>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SubjectList;
