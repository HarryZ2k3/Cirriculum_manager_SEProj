import Transition from '../../utils/Transition'
// import {Course} from './SubjectComponents'
export default function Subject() {
	return (
		<Transition className="flex flex-grow flex-col from-background_top from 0% via-background_mid via-66% to-background_bottom to-100% items-center flex-col">
            <h1>Welcome to Subject page</h1>
			<div className="flex h-full w-full flex-col gap-4 overflow-y-auto z-10">
				{/* Fake subject */}
				{Array.from({ length: 10 }, (_, i) => (
					key
					<div className="rounded-lg bg-card_blue px-3 text-center">
						<h4>Work Start</h4>
						<h4>08:00 AM</h4>
					</div>
					// <Course
					// 	key = {i}
					// 	course = "CA"
					// 	content = "Dinh Duc Anh Vu"
					// />
				))}
				
			</div>
		</Transition>
			
	)
}
