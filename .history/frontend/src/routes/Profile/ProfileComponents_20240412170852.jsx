import PropTypes from 'prop-types'

export const Infor = ({
	content,
}) => {
	return (
		<div className="flex gap-10 rounded-xl px-6 py-4 text-3xl bg-card_home text-black">
			<div className="flex flex-col items-start justify-center rounded-xl bg-card_subcard px-6">
				<h3>{weekdays}</h3>
				<h3 className="relative w-full translate-x-1 text-left text-2xl ">
					{date}
					<span className="absolute -bottom-2 text-[1.25rem]">/{month}</span>
				</h3>
			</div>
			<div className="flex flex-col items-start justify-between">
				<h3 className="font-normal">{course}</h3>
				<p className="text-[1rem] font-normal">Teacher: {teacher}</p>
				<p className="line-clamp-1 text-[1.25rem]">{content}</p>
			</div>
		</div>
	)
}
Infor.propTypes = {
	content: PropTypes.string.isRequired,
}


