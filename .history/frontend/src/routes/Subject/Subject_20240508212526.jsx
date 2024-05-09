import Transition from '../../utils/Transition'

export default function Subject() {
	return (
		<Transition className="flex flex-grow flex-col from-background_top from 0% via-background_mid via-66% to-background_bottom to-100% items-center flex-col">
            <h1>Welcome to Subject page</h1>
			<div className="flex h-full w-full flex-col gap-4 overflow-y-auto z-10">
				{/* Fake subject */}
				{Array.from({ length: 10 }, (_, i) => (
					<Course
						course = "CA"
						content = "Dinh Duc Anh Vu"
					/>
				))}
			</div>
		</Transition>
			
	)
}
