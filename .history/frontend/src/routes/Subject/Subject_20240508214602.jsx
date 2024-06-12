import Transition from '../../utils/Transition'
export default function Subject() {
	return (
		<Transition className="flex flex-grow flex-col from-background_top from 0% via-background_mid via-66% to-background_bottom to-100% items-center flex-col"
			<div className="flex h-full w-full flex-col gap-4 overflow-y-auto z-10">
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
