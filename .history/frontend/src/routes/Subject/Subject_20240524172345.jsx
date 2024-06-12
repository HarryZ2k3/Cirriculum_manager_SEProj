import Transition from '../../utils/Transition'
import { List } from './SubjectComponents'
export default function Subject() {
	return (
		<Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
			{/* The course 1/3 */}
			<div className = "flex w-1/3 flex-grow flex-col px-8 py-2">
				<h1 className="text-left align-middle text-[1.5rem] text-text_blue tracking-wider">
					List of registered subjects
				</h1>
				<div className = "flex w-full flex-col overflow-y-auto item-center justìy-evenly gap-4 rounded-2xl text-black p-2 px-3">
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
							<th className='text-text_blue'>Inclass</th>
							<th className='text-text_blue'>Midterm</th>
							<th className='text-text_blue'>Final</th>
							<th className='text-text_blue'>Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							<td>100</td>
							<td>90</td>
							<td>80</td>
							<td>87</td>
							</tr>
						</tbody>
						</table>
					
						<table className='placeholder:rounded-lg px-3 text-[1.5rem] table-fixed  border border-separateborder-spacing-[20px]  border-slate-500 ... text-left '>
							<caption className="caption-top text-left align-middle text-[2rem] text-text_blue tracking-wider">
								The assigment grade
							</caption>
							<thead>
								<tr>
								<th className='text-text_blue'>Assigment Name</th>
								<th className='text-text_blue'>Date</th>
								<th className='text-text_blue'>Grade</th>
								<th className='text-text_blue'>Notes</th>
								</tr>
							</thead>
							<tbody className='text-[1rem] '>
								<tr>
								<td>Assigment 1: Connect device</td>
								<td>23/10/24</td>
								<td>80</td>
								<td>Individual</td>
								</tr>
								<tr>
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
								<td>Assigment : Connect database(2)</td>
								<td>23/10/24</td>
								<td>80</td>
								<td>Individual</td>
								</tr>
							</tbody>
						</table>
				</div>
			</div>
		</Transition>
			
	)
}
