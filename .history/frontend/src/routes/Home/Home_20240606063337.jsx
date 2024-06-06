import Transition from '../../utils/Transition'
import { useState, useEffect } from 'react';
// Components
import { Announcement, TodayClass } from './HomeComponents'
import { FaRegEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Home() {
	const [ann, setAnns] = useState([]);
	useEffect(() => {
  		fetch('https://665071efec9b4a4a6032194b.mockapi.io/home')
		.then((res) => {
		return res.json();
	})
	.then((data) => {
	  console.log(data);
	  setAnns(data);
	});
}, []);
	return (
		<Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">

			{/* Main content 3/4 */}
			<div className="flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-2">
				<h1 className="text-left align-middle text-[2rem] text-text_blue tracking-wider">
					Announcement
				</h1>
				<div className="flex h-full w-full flex-col gap-3 overflow-y-auto z-10 py-2">
					{/* Fake data */}
					{ann.map ((seAnns) =>
						<Announcement	
							weekdays={ann.week}
							date= {ann.day}
							month= {ann.month}
							teacher= {ann.teacher}
							course = {ann.subject}
							content={ann.annoucement}
						/>
					)}
					
				</div>
			</div>

			{/* Side bar 1/4 */}
			<div className="flex w-1/3 flex-grow flex-col justify-between overflow-hidden px-8 py-4">
				<div className="flex h-full w-full flex-col gap-2 overflow-y-auto">
					<h1 className="text-left align-middle text-[1.5rem] text-text_blue tracking-wider">
						Today class
					</h1>
					{/* Fake data */}
					{Array.from({ length: 1 }, (_, i) => (
						<TodayClass
							key={1}
							course="Web Application Development"
							teacher="N.V.Sinh"
							room="A1.309"
							time="08:00 - 10:30"
						/>
					))}
					{Array.from({ length: 1 }, (_, i) => (
						<TodayClass
							key={2}
							course="Operating System"
							teacher="D.T.Nhan"
							room="ONLINE"
							time="10:35 - 13:05"
						/>
					))}
				</div>

				{/* Profile */}
				<div className="mt-4 flex flex-col items-center justify-center gap-3">
					<img
						className="w-24 rounded-full"
						src="https://placehold.co/400"
						alt="Avatar"
					/>
					<h3 className="text-2xl">Nguyen Huynh Thao My</h3>
					<div className="flex flex-grow">
						<Link to = "/profile">
							<button className="flex items-center justify-center gap-2 rounded-full bg-card_home px-4 py-1 text-black">
								<FaRegEdit />
								Edit Profile
							</button>
						</Link>
						{/* <Link to="/login">
							<button className="flex rounded-full bg-card_blue px-4 py-[2px] text-[#146C94] ">
								Login please
							</button>
						</Link> */}
					</div>
					<div className="flex w-[80%] items-center justify-evenly gap-4 rounded-2xl bg-white text-black p-2 px-3">
						<div className="rounded-lg bg-card_blue px-3 text-center">
							<h4>Work Start</h4>
							<h4>08:00 AM</h4>
						</div>
						<div className="px-3 text-center">
							<h4>Work End</h4>
							<h4>05:30 pm</h4>
						</div>
					</div>
				</div>
			</div>
		</Transition>
	)
}
