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
			<div className="flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-4 text-black overflow-y-auto">
				<div className = "flex flex-grow flex-col overflow-hidden">
					<table className=' placeholder:rounded-lg px-3 text-[2.5rem] table-fixed border-separate border-spacing-[40px] border border-slate-500 ... text-center'>
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
					
						<table className='placeholder:rounded-lg px-3 text-[1.5rem] table-fixed border-separate border-spacing-[20px] border border-slate-500 ... text-left'>
						<caption class="caption-top">
    						Table 3.1: Professional wrestlers and their signature moves.
						</caption>
						<thead>
							<tr>
							<th className='text-text_blue'>StudentID</th>
							<th className='text-text_blue'>StudentName</th>
							<th className='text-text_blue'>Numbers</th>
							<th className='text-text_blue'>Notes</th>
							</tr>
						</thead>
						<tbody className='text-[1rem]'>
							<tr>
							<td>ITCSIU21204</td>
							<td>Nguyen Huynh Thao My</td>
							<td>0911-855-722</td>
							<td> </td>
							</tr>
                            <tr>
							<td>ITITWE22151</td>
							<td>Pham Ha Tri Duc</td>
							<td>5621-690-420</td>
							<td> </td>
							</tr>
                            <tr>
							<td>ITCSIU21204</td>
							<td>Nguyen Huynh Thao My</td>
							<td>0911-855-722</td>
							<td> </td>
							</tr>
                            <tr>
							<td>ITITWE22151</td>
							<td>Pham Ha Tri Duc</td>
							<td>5621-690-420</td>
							<td> </td>
							</tr>
                            <tr>
							<td>ITCSIU21204</td>
							<td>Nguyen Huynh Thao My</td>
							<td>0911-855-722</td>
							<td> </td>
							</tr>
                            <tr>
							<td>ITITWE22151</td>
							<td>Pham Ha Tri Duc</td>
							<td>5621-690-420</td>
							<td> </td>
							</tr>
                            <tr>
							<td>ITCSIU21204</td>
							<td>Nguyen Huynh Thao My</td>
							<td>0911-855-722</td>
							<td> </td>
							</tr>
                            <tr>
							<td>ITITWE22151</td>
							<td>Pham Ha Tri Duc</td>
							<td>5621-690-420</td>
							<td> </td>
							</tr>
                            <tr>
							<td>ITCSIU21204</td>
							<td>Nguyen Huynh Thao My</td>
							<td>0911-855-722</td>
							<td> </td>
							</tr>
                            <tr>
							<td>ITITWE22151</td>
							<td>Pham Ha Tri Duc</td>
							<td>5621-690-420</td>
							<td> </td>
							</tr>
                            <tr>
							<td>ITCSIU21204</td>
							<td>Nguyen Huynh Thao My</td>
							<td>0911-855-722</td>
							<td> </td>
							</tr>
                            <tr>
							<td>ITITWE22151</td>
							<td>Pham Ha Tri Duc</td>
							<td>5621-690-420</td>
							<td> </td>
							</tr>
                            <tr>
							<td>ITCSIU21204</td>
							<td>Nguyen Huynh Thao My</td>
							<td>0911-855-722</td>
							<td> </td>
							</tr>
                            <tr>
							<td>ITITWE22151</td>
							<td>Pham Ha Tri Duc</td>
							<td>5621-690-420</td>
							<td> </td>
							</tr>
						</tbody>
						</table>
				</div>
			</div>
		</Transition>
			
	)
}
