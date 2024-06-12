import Transition from '../../utils/Transition'
export default function Subject() {
	return (
		<Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
			<div className="flex w-[80%] items-center justify-evenly gap-4 rounded-2xl text-black p-2 px-3 overflow-y-auto z-10">
				<div className="rounded-lg bg-card_blue px-3 text-center">
					<h3>Course Name</h3>
					<h3>Teacher Name</h3>
				</div>
				<div className="rounded-lg bg-card_blue px-3 text-center">
					<h3>Course Name</h3>
					<h3>Teacher Name</h3>
				</div>
				<div className="rounded-lg bg-card_blue px-3 text-center">
					<h3>Course Name</h3>
					<h3>Teacher Name</h3>
				</div>
				<div className="rounded-lg bg-card_blue px-3 text-center">
					<h3>Course Name</h3>
					<h3>Teacher Name</h3>
				</div>
				<div className="rounded-lg bg-card_blue px-3 text-center">
					<h3>Course Name</h3>
					<h3>Teacher Name</h3>
				</div>
				<div className="rounded-lg bg-card_blue px-3 text-center">
					<h3>Course Name</h3>
					<h3>Teacher Name</h3>
				</div>
			</div>
		</Transition>
			
	)
}
