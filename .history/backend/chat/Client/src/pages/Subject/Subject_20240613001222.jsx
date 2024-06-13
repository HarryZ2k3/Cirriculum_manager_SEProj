// import Transition from '../../utils/Transition'
// import { List } from './SubjectComponents'
// import { useState, useEffect } from 'react';
// import Grade from './Grade'
// //import Grade_1 from './Grade_1';
// export default function Subject() {
// 	// Use useState hook to manage the click count
// 	// const [count, setCount] = useState(0);

// 	// Function to handle click events
// 	// const handleClick = () => {
// 	//   setCount(count + 1); // Increment the count on click
// 	// };
// 	const [subjects, setSubjects] = useState([]);
//   	useEffect(() => {
//     fetch('https://665071efec9b4a4a6032194b.mockapi.io/subject')
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setSubjects(data);
//       });
//   }, []);
	
// 	return (
// 		<Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
// 			{/* The course 1/3 */}
			
// 			<div className = "flex w-1/3 flex-grow flex-col px-8 py-2">
// 				<h1 className="text-left align-middle text-[1.75rem] text-text_blue tracking-wider">
// 					List of registered subjects
// 				</h1>
// 				<div className = "flex w-full flex-col overflow-y-auto item-center justìy-evenly gap-4 rounded-2xl text-black p-2 px-3">
// 					{/* {subjects.map((subjects) => (
// 						subject = {subjects.subject},
// 						teacher = {subjects.subject},
// 					))} */}
// 					{/* {Array.from({length: 10 }, (_, i) => ( */}
// 					{subjects.map ((subjects) =>
// 						<List	
// 							subject = {subjects.subject}
// 							teacher = {subjects.teacher}
// 						/>
// 					)}
// 				</div>
// 			</div>
// 			<div className="flex w-2/3 flex-grow flex-col px-8 text-black overflow-y-auto">
// 				{/* if onClick  onClick={handleClick}  */}
// 				i<Grade/>
// 				{/* <Grade_1/> */}
// 			</div>
			
// 		</Transition>
			
// 	)
// }


import { useState } from 'react';
import SubjectList from './SubjectList';
import GradeTable from './GradeTable';
import Transition from '../../utils/Transition';
import PieChart from '../Subject/PieChart';
import LineChart from '../Subject/LineChart';
import GPAChart from './'
const subjects = [
  { id: 1, name: 'Artificial Intelligence_G3', teacher: 'Le Thanh Sach' },
  { id: 2, name: 'Artificial Intelligence_G3_L1', teacher: 'Ly Tu Nga' },
  { id: 3, name: 'Information System Management_G1', teacher: 'Nguyen Duc Dung' },
  { id: 4, name: 'Operating System_G1', teacher: 'Tran Manh Ha' },
  { id: 5, name: 'Operating System_G1_L1', teacher: 'Danh Tam Nhan' },
  // Add more subjects here
];

const grades = {
  1: { inclass: 100, midterm: 90, final: 80, total: 87 },
  2: { inclass: 95, midterm: 85, final: 75, total: 85 },
  3: { inclass: 98, midterm: 88, final: 78, total: 88 },
  4: { inclass: 100, midterm: 90, final: 80, total: 87 },
  5: { inclass: 92, midterm: 82, final: 72, total: 82 },
  // Add more grades for other subjects
};

const assignments = {
  1: [
    { name: 'Assignment 1: Connect device(1)', date: '23/10/24', grade: 80, notes: 'Individual' },
    { name: 'Assignment 2: Connect device(2)', date: '30/10/24', grade: 90, notes: 'Individual' },
    { name: 'Assignment 3: Connect device', date: '07/11/24', grade: 100, notes: 'Group 2' },
    { name: 'Assignment 4: Connect device', date: '14/11/24', grade: 80, notes: 'Individual' },
  ],
  2: [
    { name: 'Assignment 1: AI basics', date: '23/10/24', grade: 85, notes: 'Individual' },
    { name: 'Assignment 2: AI application', date: '30/10/24', grade: 90, notes: 'Group 1' },
  ],
  3: [
    { name: 'Assignment 1: System Design', date: '23/10/24', grade: 95, notes: 'Individual' },
    { name: 'Assignment 2: Implementation', date: '30/10/24', grade: 85, notes: 'Group 3' },
  ],
  4: [
    { name: 'Assignment 1: OS basics', date: '23/10/24', grade: 90, notes: 'Individual' },
    { name: 'Assignment 2: OS concepts', date: '30/10/24', grade: 85, notes: 'Group 1' },
  ],
  5: [
    { name: 'Assignment 1: Advanced OS', date: '23/10/24', grade: 92, notes: 'Individual' },
    { name: 'Assignment 2: OS Networking', date: '30/10/24', grade: 82, notes: 'Group 2' },
  ],
  // Add more assignments for other subjects
};

const Subject = () => {
  const [selectedSubjectId, setSelectedSubjectId] = useState(subjects[0].id);

  return (
    <Transition className="flex flex-grow bg-gradient-to-b from-background_top via-background_mid to-background_bottom">
      {/* Subject List 1/4 */}
      <div className="flex w-1/3 flex-col overflow-hidden px-8 py-2">
        <h1 className="text-left text-2xl text-text_blue tracking-wider">List of registered subjects</h1>
        <div className="flex flex-col gap-3 overflow-y-auto py-2 z-10">
          <SubjectList subjects={subjects} onSubjectClick={setSelectedSubjectId} />
        </div>
      </div>

      {/* Grade Table 3/4 */}
      <div className="flex w-2/3 flex-col overflow-auto px-8 py-2">
        <LineChart />
        <PieChart />
        <GPAChart />
        <h1 className="text-left text-2xl text-text_blue tracking-wider">Grade table</h1>
        <GradeTable grades={grades[selectedSubjectId]} assignments={assignments[selectedSubjectId]} />
      </div>
    </Transition>
  );
};

export default Subject;
