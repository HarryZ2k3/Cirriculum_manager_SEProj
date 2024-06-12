import Transition from '../../utils/Transition'
export default function Subject() {
	return (
		<Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
			{/* The course 1/3 */}
			<div className = "flex w-1/4 flex-grow flex-col overflow-y-auto px-8 py-4">
				<h1 className="text-left align-middle text-[1.5rem] text-text_blue tracking-wider">
					List of registered subjects
				</h1>
				<div className = "flex w-full flex-col item-center justìy-evenly gap-4 rounded-2xl text-black p-2 px-3">
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
				</div>
			</div>
			<div className="flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-4">
				<div className = "flex w-1/3 flex-grow flex-col overflow-hidden px-8 py-4">
					<h1 className="text-left align-middle text-[2rem] text-text_blue tracking-wider">
						Grade
					</h1>
					<div className="rounded-lg bg-card_blue px-3 text-left">
					<table className='table-auto'>
						<thead>
							<tr>
							<th>Grade</th>
							<th>Inclass</th>
							<th>Midterm</th>
							<th>Final</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							<td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
							<td>Malcolm Lockyer</td>
							<td>1961</td>
							</tr>
							<tr>
							<td>Witchy Woman</td>
							<td>The Eagles</td>
							<td>1972</td>
							</tr>
							<tr>
							<td>Shining Star</td>
							<td>Earth, Wind, and Fire</td>
							<td>1975</td>
							</tr>
						</tbody>
						</table>
					</div>
				</div>
			</div>
		</Transition>
			
	)
}
