import Transition from '../../utils/Transition'
export default function Subject() {
	return (
		<Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
			{/* The course 3/4 */}
			<div className="flex w-1/3 flex-grow flex-col overflow-hidden px-8 py-4">
				<h1 className="text-left align-middle text-[2rem] text-text_blue tracking-wider">
					List of registered subjects
				</h1>
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
			</div>
		</Transition>
			
	)
}