import Transition from '../../utils/Transition'
export default function Subject() {
	return (
		<Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
			{/* The course 1/3 */}
			<div className="flex w-1/3 flex-grow flex-col overflow-hidden px-8 py-4">
				<div className = "flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-4">

				</div>

			</div>
		</Transition>
			
	)
}
