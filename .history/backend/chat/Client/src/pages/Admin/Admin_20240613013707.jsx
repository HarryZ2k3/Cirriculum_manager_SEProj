// import Transition from '../../utils/Transition'
// export default function Admin() {
// 	return (
// 		<Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
// 			{/* The course 1/3 */}
// 			<div className = "flex w-1/4 flex-grow flex-col overflow-y-auto px-8 py-4">
// 				<h1 className="text-left align-middle text-[1.5rem] text-text_blue tracking-wider">
// 					List of registered subjects
// 				</h1>
// 				<div className = "flex w-full flex-col item-center justìy-evenly gap-4 rounded-2xl text-black p-2 px-3">
//                     <div className="rounded-lg bg-card_blue px-3 py-5 text-left border border-spacing-[20px]">
//                         <h3 className="text-text_gray">Class: Theory</h3>
//                         <h3 className="line-clamp-1 text-[1.1rem]"> Computer Architecture_G1_L1 </h3>
// 					</div>
// 					<div className="rounded-lg bg-card_blue px-3 py-5 text-left border border-spacing-[20px]">
//                         <h3 className="text-text_gray">Class: Laborary</h3>
//                         <h3 className="line-clamp-1 text-[1.1rem]"> Computer Architecture_G1_L1 </h3>
// 					</div>
// 					<div className="rounded-lg bg-card_blue px-3 py-5 text-left border border-spacing-[20px]">
//                         <h3 className="text-text_gray">Class: Theory</h3>
//                         <h3 className="line-clamp-1 text-[1.1rem]"> Computer Architecture_G1_L1 </h3>
// 					</div>
// 					<div className="rounded-lg bg-card_blue px-3 py-5 text-left border border-spacing-[20px]">
//                         <h3 className="text-text_gray">Class: Laborary</h3>
//                         <h3 className="line-clamp-1 text-[1.1rem]"> Computer Architecture_G1_L1 </h3>
// 					</div>
//                     <div className="rounded-lg bg-card_blue px-3 py-5 text-left border border-spacing-[20px]">
//                         <h3 className="text-text_gray">Class: Theory</h3>
//                         <h3 className="line-clamp-1 text-[1.1rem]"> Computer Architecture_G1_L1 </h3>
// 					</div>
// 					<div className="rounded-lg bg-card_blue px-3 py-5 text-left border border-spacing-[20px]">
//                         <h3 className="text-text_gray">Class: Laborary</h3>
//                         <h3 className="line-clamp-1 text-[1.1rem]"> Computer Architecture_G1_L1 </h3>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-4 text-black overflow-y-auto">
// 				<div className = "flex flex-grow flex-col overflow-hidden overflow-y-auto">
// 					<table className='placeholder:rounded-lg px-3 text-[1.5rem] table-fixed border-separate border-spacing-[20px] border border-slate-500 ... text-left'>
// 						<thead>
// 							<tr>
// 							<th className='text-text_blue'>StudentID</th>
// 							<th className='text-text_blue'>StudentName</th>
// 							<th className='text-text_blue'>Numbers</th>
// 							<th className='text-text_blue'>Notes</th>
// 							</tr>
// 						</thead>
// 						<tbody className='text-[1rem]'>
// 							<tr>
// 							<td>ITCSIU21204</td>
// 							<td>Nguyen Huynh Thao My</td>
// 							<td>0911-855-722</td>
// 							<td> </td>
// 							</tr>
//                             <tr>
// 							<td>ITITWE22151</td>
// 							<td>Pham Ha Tri Duc</td>
// 							<td>5621-690-420</td>
// 							<td> </td>
// 							</tr>
//                             <tr>
// 							<td>ITCSIU21204</td>
// 							<td>Nguyen Huynh Thao My</td>
// 							<td>0911-855-722</td>
// 							<td> </td>
// 							</tr>
//                             <tr>
// 							<td>ITITWE22151</td>
// 							<td>Pham Ha Tri Duc</td>
// 							<td>5621-690-420</td>
// 							<td> </td>
// 							</tr>
//                             <tr>
// 							<td>ITCSIU21204</td>
// 							<td>Nguyen Huynh Thao My</td>
// 							<td>0911-855-722</td>
// 							<td> </td>
// 							</tr>
//                             <tr>
// 							<td>ITITWE22151</td>
// 							<td>Pham Ha Tri Duc</td>
// 							<td>5621-690-420</td>
// 							<td> </td>
// 							</tr>
//                             <tr>
// 							<td>ITCSIU21204</td>
// 							<td>Nguyen Huynh Thao My</td>
// 							<td>0911-855-722</td>
// 							<td> </td>
// 							</tr>
//                             <tr>
// 							<td>ITITWE22151</td>
// 							<td>Pham Ha Tri Duc</td>
// 							<td>5621-690-420</td>
// 							<td> </td>
// 							</tr>
//                             <tr>
// 							<td>ITCSIU21204</td>
// 							<td>Nguyen Huynh Thao My</td>
// 							<td>0911-855-722</td>
// 							<td> </td>
// 							</tr>
//                             <tr>
// 							<td>ITITWE22151</td>
// 							<td>Pham Ha Tri Duc</td>
// 							<td>5621-690-420</td>
// 							<td> </td>
// 							</tr>
//                             <tr>
// 							<td>ITCSIU21204</td>
// 							<td>Nguyen Huynh Thao My</td>
// 							<td>0911-855-722</td>
// 							<td> </td>
// 							</tr>
//                             <tr>
// 							<td>ITITWE22151</td>
// 							<td>Pham Ha Tri Duc</td>
// 							<td>5621-690-420</td>
// 							<td> </td>
// 							</tr>
//                             <tr>
// 							<td>ITCSIU21204</td>
// 							<td>Nguyen Huynh Thao My</td>
// 							<td>0911-855-722</td>
// 							<td> </td>
// 							</tr>
//                             <tr>
// 							<td>ITITWE22151</td>
// 							<td>Pham Ha Tri Duc</td>
// 							<td>5621-690-420</td>
// 							<td> </td>
// 							</tr>
// 						</tbody>
// 						</table>
// 				</div>
// 			</div>
// 		</Transition>	
// 	)
// }

import UploadForm from './UploadForm'
import { useState } from 'react';
import DataDisplay from './DataDisplay';
import SubjectList from './SubjectList';
import GradeDisplay from './GradeDisplay';
import AnnouncementForm from './AnnouncementForm';
import { AuthContext } from "../../context";

export default function Admin() {
	const {user,logoutUser}  = useContext(AuthContext);
	
	const [data, setData] = useState(null);
	const [selectedSubject, setSelectedSubject] = useState(null);
	const [view, setView] = useState('information'); // default view
  
	const handleDataUpload = (uploadedData) => {
	  setData(uploadedData);
	};
  
	const handleSubjectClick = (subject) => {
	  setSelectedSubject(subject);
	  // Fake data
	  const fakeData = [
		{ StudentID: 'ITCSIU21204', StudentName: 'Nguyen Huynh Thao My', Numbers: '0911-855-722', Notes: '' },
		{ StudentID: 'ITITWE22151', StudentName: 'Pham Ha Tri Duc', Numbers: '5621-690-420', Notes: '' },
		
	  ];
	  setData(fakeData);
	};
  
	const renderView = () => {
	  switch (view) {
		case 'information':
		  return <DataDisplay data={data} />;
		case 'grades':
		  return <GradeDisplay data={data} />;
		case 'announcement':
		  return <AnnouncementForm />;
		default:
		  return null;
	  }
	};
	return(
		<div className="min-h-screen bg-gray-100 p-4 flex">
      <div className="w-1/3 bg-white p-8 rounded shadow-md overflow-auto">
	  	<div className="mt-4">
          <button onClick={() => setView('information')} className="bg-blue-500 text-white p-2 rounded mr-2">
            Student Information
          </button>
          <button onClick={() => setView('grades')} className="bg-green-500 text-white p-2 rounded mr-2">
            Student Grades
          </button>
          <button onClick={() => setView('announcement')} className="bg-yellow-500 text-white p-2 rounded">
            Post Announcement
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-4">Admin Upload Page</h1>
        <UploadForm onDataUpload={handleDataUpload} />
        <h2 className="text-2xl font-bold mt-6 mb-4">List of Registered Subjects</h2>
        <SubjectList onSubjectClick={handleSubjectClick} />
        =
      </div>
      <div className="w-2/3 bg-white p-8 rounded shadow-md ml-4">
        <h2 className="text-2xl font-bold mb-4">Details</h2>
        {selectedSubject && <h3 className="text-xl font-semibold mb-4">Subject: {selectedSubject.name}</h3>}
        {renderView()}
      </div>
    </div>
  );


	// <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    //   <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
    //     <h1 className="text-2xl font-bold mb-4">Admin Upload Page</h1>
    //     <UploadForm />
    //   </div>
    // </div>
	//)

}

// import { useState } from 'react';
// import UploadForm from './UploadForm';
// import SubjectList from './SubjectList';
// import DataDisplay from './DataDisplay';

// const subjects = [
//   { id: 1, type: 'Theory', name: 'Computer Architecture_G1_L1' },
//   { id: 2, type: 'Laboratory', name: 'Computer Architecture_G1_L1' },
//   // Add more subjects as needed
// ];

// function Admin() {
//   const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
//   const [data, setData] = useState([]);

//   const handleSubjectClick = (subject) => {
//     setSelectedSubject(subject);
//     // Optionally, you could also reset the data here if needed
//   };

//   const handleDataUpload = (uploadedData) => {
//     setData(uploadedData);
//   };

//   return (
//     <div className="container mx-auto">
//       <div className="flex">
//         <div className="w-1/3">
//           <UploadForm onDataUpload={handleDataUpload} />
//           <SubjectList subjects={subjects} onSubjectClick={handleSubjectClick} />
//         </div>
//         <div className="w-2/3">
//           <DataDisplay subject={selectedSubject} data={data} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;



