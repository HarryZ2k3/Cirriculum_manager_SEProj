// import Transition from '../../utils/Transition'

// export default function Grade() {
// 	return (
// 		<Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
//             <div className = "flex flex-grow flex-col overflow-y-auto">
//                 <table className=' placeholder:rounded-lg px-3 text-[2rem] table-fixed border-separate border-spacing-[20px] border border-slate-500 ... text-center'>
//                     <caption className="caption-top text-left align-middle text-[1.75rem] text-text_blue tracking-wider">
//                         Grade table
//                     </caption>
//                     <thead>
//                         <tr>
//                         <th className=' border border-white text-text_blue'>Inclass</th>
//                         <th className=' border border-white text-text_blue'>Midterm</th>
//                         <th className=' border border-white text-text_blue'>Final</th>
//                         <th className=' border border-white text-text_blue'>Total</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                         <td className=' border border-white'>100</td>
//                         <td className=' border border-white'>90</td>
//                         <td className=' border border-white'>80</td>
//                         <td className=' border border-white'>87</td>
//                         </tr>
//                     </tbody>
//                     </table>
                
//                     <table className="placeholder:rounded-lg px-3 text-[1.5rem] table-fixed  border border-separate border-spacing-[10px]  border-slate-500 ... text-left">
//                     {/* <table className='placeholder:rounded-lg px-3 text-[1.5rem] table-fixed  border border-separate border-spacing-[10px]  border-slate-500 ... text-left '> */}
//                         <caption className="caption-top align-middle text-[2rem] text-text_blue tracking-wider">
//                             The assigment grade
//                         </caption>
//                         <thead>
//                             <tr>
//                             <th className='border border-white text-text_blue'>Assigment Name</th>
//                             <th className='border border-white text-text_blue'>Date</th>
//                             <th className='border border-white text-text_blue'>Grade</th>
//                             <th className='border border-white text-text_blue'>Notes</th>
//                             </tr>
//                         </thead>
//                         <tbody className='text-[1.25rem]'>
//                             <tr>
//                             <td className='border border-white'>Assigment 1: Connect device(1)</td>
//                             <td className='border border-white text-center'>23/10/24</td>
//                             <td className='border border-white text-center'>80</td>
//                             <td className='border border-white text-center'>Individual</td>
//                             </tr>
//                             <tr>
//                             <td className='border border-white'>Assigment 2: Connect device(2)</td>
//                             <td className='border border-white text-center'>30/10/24</td>
//                             <td className='border border-white text-center'>90</td>
//                             <td className='border border-white text-center'>Individual</td>
//                             </tr>
//                             <tr>
//                             <td className='border border-white'>Assigment 3: Connect device</td>
//                             <td className='border border-white text-center'>07/11/24</td>
//                             <td className='border border-white text-center'>100</td>
//                             <td className='border border-white text-center'>Group 2</td>
//                             </tr>
//                             <tr>
//                             <td className='border border-white'>Assigment 4: Connect device</td>
//                             <td className='border border-white text-center'>14/11/24</td>
//                             <td className='border border-white text-center'>80</td>
//                             <td className='border border-white text-center'>Individual</td>
//                             </tr>
            
//                             {/* <tr>
//                             <td>Assigment 2: Connect device</td>
//                             <td>23/10/24</td>
//                             <td>100</td>
//                             <td>Group 3</td>
//                             </tr>
//                             <tr>
//                             <td>Assigment 3: Connect database(1)</td>
//                             <td>23/10/24</td>
//                             <td>80</td>
//                             <td>Individual</td>
//                             </tr>
//                             <tr>
//                             <td>Assigment 4: Connect database(2)</td>
//                             <td>23/10/24</td>
//                             <td>80</td>
//                             <td>Individual</td>
//                             </tr> */}
//                         </tbody>
//                     </table>
//             </div>
// 		</Transition>
// 	)
// }



import { useState } from 'react';
import { CSVLink } from 'react-csv';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function Grade({ subject, data }) {

    const data = {
        labels: ['Inclass', 'Midterm', 'Final'],
        datasets: [
          {
            label: '# of Votes',
            data: [100, 90, 80], // these should be dynamically fetched or calculated
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1,
          },
        ],
      };

  const [editIdx, setEditIdx] = useState(-1);
  const [editData, setEditData] = useState([]);
  const [currentData, setCurrentData] = useState(data);

  const handleEdit = (index) => {
    setEditIdx(index);
    setEditData([...currentData]);
  };

  const handleChange = (e, index, key) => {
    const newData = [...editData];
    newData[index][key] = e.target.value;
    setEditData(newData);
  };

  const handleSave = () => {
    setCurrentData(editData);
    setEditIdx(-1);
  };

  const handleCancel = () => {
    setEditIdx(-1);
    setEditData([...currentData]);
  };

  if (!subject || !data || data.length === 0) {
    return <div>No data available. Please upload a file or select a subject.</div>;
  }

  const chartData = {
    labels: ['Inclass', 'Midterm', 'Final'],
    datasets: [
      {
        label: 'Grades',
        data: [currentData[0]?.Inclass, currentData[0]?.Midterm, currentData[0]?.Final],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{subject.name}</h2>
      <Bar data={chartData} />
      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 text-left border">StudentID</th>
            <th className="py-2 px-4 bg-gray-200 text-left border">StudentName</th>
            <th className="py-2 px-4 bg-gray-200 text-left border">Numbers</th>
            <th className="py-2 px-4 bg-gray-200 text-left border">Notes</th>
            <th className="py-2 px-4 bg-gray-200 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((student, index) => (
            <tr key={index} className={`hover:bg-gray-100 ${editIdx === index ? 'bg-gray-50' : ''}`}>
              <td className="py-2 px-4 border">
                {editIdx === index ? (
                  <input 
                    type="text" 
                    value={editData[index].StudentID} 
                    onChange={(e) => handleChange(e, index, 'StudentID')} 
                    className="border p-1 w-full"
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
                    className="border p-1 w-full"
                  />
                ) : (
                  student.StudentName
                )}
              </td>
              <td className="py-2 px-4 border">
                {editIdx === index ? (
                  <input 
                    type="text" 
                    value={editData[index].Numbers} 
                    onChange={(e) => handleChange(e, index, 'Numbers')} 
                    className="border p-1 w-full"
                  />
                ) : (
                  student.Numbers
                )}
              </td>
              <td className="py-2 px-4 border">
                {editIdx === index ? (
                  <input 
                    type="text" 
                    value={editData[index].Notes} 
                    onChange={(e) => handleChange(e, index, 'Notes')} 
                    className="border p-1 w-full"
                  />
                ) : (
                  student.Notes
                )}
              </td>
              <td className="py-2 px-4 border">
                {editIdx === index ? (
                  <div>
                    <button onClick={handleSave} className="bg-green-500 text-white p-1 rounded mr-2">Save</button>
                    <button onClick={handleCancel} className="bg-red-500 text-white p-1 rounded">Cancel</button>
                  </div>
                ) : (
                  <button onClick={() => handleEdit(index)} className="bg-blue-500 text-white p-1 rounded">Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CSVLink 
        data={currentData} 
        className="bg-blue-500 text-white p-2 rounded mt-4 inline-block"
      >
        Export to CSV
      </CSVLink>
    </div>
  );
}

export default Grade;
