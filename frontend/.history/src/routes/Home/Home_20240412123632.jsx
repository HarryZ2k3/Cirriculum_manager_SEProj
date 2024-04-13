import Transition from '../../utils/Transition'

// Components
import { Announcement, TodayClass } from './HomeComponents'
import { FaRegEdit } from 'react-icons/fa'

export default function Home() {
	return (
		<Transition className="flex flex-grow bg-gradient-to-b from-background_top via-background_mid to-background_bottom">
			{/* Main content 3/4 */}
			<div className="flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-4">
				<h1 className="text-left align-middle text-[3rem] text-text_blue tracking-wider">
					Announcement
				</h1>
				<div className="flex h-full w-full flex-col gap-4 overflow-y-auto z-10">
					{/* Fake data */}
					{Array.from({ length: 10 }, (_, i) => (
						<Announcement
							key={i}
							weekdays="Mon"
							date="18"
							month="04"
							teacher="V.C.Thanh"
							course="Data Structure & Algorithm"
							content="Lorem ipsum dolor sit amet consectetur. Nunc dui aliquam in dictum eget vel."
						/>
					))}
				</div>
			</div>

			{/* Side bar 1/4 */}
			<div className="flex w-1/3 flex-grow flex-col justify-between overflow-hidden px-8 py-4">
				<div className="flex h-full w-full flex-col gap-4 overflow-y-auto">
					{/* Fake data */}
					{Array.from({ length: 4 }, (_, i) => (
						<TodayClass
							key={i}
							course="Data Structure & Algorithm"
							teacher="V.C.Thanh"
							room="A2.101"
							time="07:30 - 10:30"
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
					<h3 className="text-2xl">Mia James</h3>
					<button className="flex items-center justify-center gap-2 rounded-full bg-blue-300 px-4 py-1">
						<FaRegEdit />
						Edit Profile
					</button>
					<div className="flex w-[80%] items-center justify-evenly gap-4 rounded-2xl bg-blue-300 p-2 px-3">
						<div className="rounded-lg bg-blue-500 px-3 text-center text-white">
							<h4>Work Start</h4>
							<h4>08:00 AM</h4>
						</div>
						<div className="px-3 text-center text-white">
							<h4>Work End</h4>
							<h4>05:30 pm</h4>
						</div>
					</div>
				</div>
			</div>
		</Transition>
	)
}