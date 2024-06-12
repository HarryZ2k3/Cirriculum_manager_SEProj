import Transition from '../../utils/Transition'
import { List } from './SubjectComponents'
import { useState, useEffect } from 'react';


export default function Subject() {
	const [subjects, setSubjects] = useState([]);
  	useEffect(() => {
    fetch('https://665071efec9b4a4a6032194b.mockapi.io/subject')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSubjects(data);
      });
  }, []);
	
	return (
		<Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
			{/* The course 1/3 */}
			<div className = "flex w-1/3 flex-grow flex-col px-8 py-2">
				<h1 className="text-left align-middle text-[1.5rem] text-text_blue tracking-wider">
					List of registered subjects
				</h1>
				<div className = "flex w-full flex-col overflow-y-auto item-center justìy-evenly gap-4 rounded-2xl text-black p-2 px-3">
					{subjects.map((photo) => (
						<img key={subjects.id} subject = {subjects.subject}/>
					))}
					
					
					{Array.from({length: 12 }, (_, i) => (
						<List	
							key = {i}
							subject = "Artificial Intelligence_G03"
							teacher = "Le Thanh Sach"
						/>
					))}
				</div>
			</div>
			<div className="flex w-2/3 flex-grow flex-col px-8 py-2 text-black overflow-y-auto">
				<div className = "flex flex-grow flex-col overflow-y-auto">
					<table className=' placeholder:rounded-lg px-3 text-[2rem] table-fixed border-separate border-spacing-[20px] border border-slate-500 ... text-center'>
						<caption className="caption-top text-left align-middle text-[2rem] text-text_blue tracking-wider">
							Grade table
						</caption>
						<thead>
							<tr>
							<th className=' border border-white text-text_blue'>Inclass</th>
							<th className=' border border-white text-text_blue'>Midterm</th>
							<th className=' border border-white text-text_blue'>Final</th>
							<th className=' border border-white text-text_blue'>Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							<td className=' border border-white'>100</td>
							<td className=' border border-white'>90</td>
							<td className=' border border-white'>80</td>
							<td className=' border border-white'>87</td>
							</tr>
						</tbody>
						</table>
					
						<table className="placeholder:rounded-lg px-3 text-[1.5rem] table-fixed  border border-separate border-spacing-[10px]  border-slate-500 ... text-left">
						{/* <table className='placeholder:rounded-lg px-3 text-[1.5rem] table-fixed  border border-separate border-spacing-[10px]  border-slate-500 ... text-left '> */}
							<caption className="caption-top align-middle text-[2rem] text-text_blue tracking-wider">
								The assigment grade
							</caption>
							<thead>
								<tr>
								<th className='border border-white text-text_blue'>Assigment Name</th>
								<th className='border border-white text-text_blue'>Date</th>
								<th className='border border-white text-text_blue'>Grade</th>
								<th className='border border-white text-text_blue'>Notes</th>
								</tr>
							</thead>
							<tbody className='text-[1.25rem]'>
								<tr>
								<td className='border border-white'>Assigment 1: Connect device(1)</td>
								<td className='border border-white text-center'>23/10/24</td>
								<td className='border border-white text-center'>80</td>
								<td className='border border-white text-center'>Individual</td>
								</tr>
								<tr>
								<td className='border border-white'>Assigment 2: Connect device(2)</td>
								<td className='border border-white text-center'>30/10/24</td>
								<td className='border border-white text-center'>90</td>
								<td className='border border-white text-center'>Individual</td>
								</tr>
								<tr>
								<td className='border border-white'>Assigment 3: Connect device</td>
								<td className='border border-white text-center'>07/11/24</td>
								<td className='border border-white text-center'>100</td>
								<td className='border border-white text-center'>Group 2</td>
								</tr>
								<tr>
								<td className='border border-white'>Assigment 4: Connect device</td>
								<td className='border border-white text-center'>14/11/24</td>
								<td className='border border-white text-center'>80</td>
								<td className='border border-white text-center'>Individual</td>
								</tr>
				
								{/* <tr>
								<td>Assigment 2: Connect device</td>
								<td>23/10/24</td>
								<td>100</td>
								<td>Group 3</td>
								</tr>
								<tr>
								<td>Assigment 3: Connect database(1)</td>
								<td>23/10/24</td>
								<td>80</td>
								<td>Individual</td>
								</tr>
								<tr>
								<td>Assigment 4: Connect database(2)</td>
								<td>23/10/24</td>
								<td>80</td>
								<td>Individual</td>
								</tr> */}
							</tbody>
						</table>
				</div>
			</div>
		</Transition>
			
	)
}
