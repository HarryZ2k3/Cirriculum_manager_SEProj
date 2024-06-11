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
export default function Admin() {
	const [data, setData] = useState(null);

  const handleDataUpload = (uploadedData) => {
    setData(uploadedData);
  };
	return(
	// <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    //   <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
    //     <h1 className="text-2xl font-bold mb-4">Admin Upload Page</h1>
    //     <UploadForm />
    //   </div>
    // </div>
	)

}