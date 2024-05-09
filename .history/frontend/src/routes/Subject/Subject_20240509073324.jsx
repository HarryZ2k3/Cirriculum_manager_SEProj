import Transition from '../../utils/Transition'
export default function Subject() {
	return (
		<Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
			{/* The course 1/3 */}
			<div className = "flex w-1/8 flex-grow flex-col overflow-hidden px-8 py-4">
				<h1 className="text-left align-middle text-[2rem] text-text_blue tracking-wider">
					List of registered subjects
				</h1>
				<div className = "flex w-full flex-col item-center justìy-evenly gap-4 text-black p-2 px-3">
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
				</div>
			</div>
			<div className="flex w-1/3 flex-grow flex-col overflow-hidden px-8 py-4">
				<div className = "flex w-1/3 flex-grow flex-col overflow-hidden px-8 py-4">
					<h1 className="text-left align-middle text-[2rem] text-text_blue tracking-wider">
						List of registered subjects
					</h1>
					<div className="flex w-full flex-col items-center justify-evenly gap-4 rounded-2xl text-black p-2 px-3 ">
						<div className="rounded-lg bg-card_blue px-3 text-left">
							<h3 className="line-clamp-1"> Computer Architecture </h3>
							<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
						</div>
						<div className="rounded-lg bg-card_blue px-3 text-left">
							<h3 className="line-clamp-1"> Computer Architecture </h3>
							<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
						</div>
						<div className="rounded-lg bg-card_blue px-3 text-left">
							<h3 className="line-clamp-1"> Computer Architecture </h3>
							<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
						</div>
						<div className="rounded-lg bg-card_blue px-3 text-left">
							<h3 className="line-clamp-1"> Computer Architecture </h3>
							<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
						</div>
						<div className="rounded-lg bg-card_blue px-3 text-left">
							<h3 className="line-clamp-1"> Computer Architecture </h3>
							<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
						</div>
					</div>
				</div>
			</div>
		</Transition>
			
	)
}
