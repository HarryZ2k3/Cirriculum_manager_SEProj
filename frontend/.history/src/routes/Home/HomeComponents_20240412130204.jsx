import PropTypes from 'prop-types'

export const Announcement = ({
	weekdays,
	date,
	month,
	course,
	teacher,
	content,
}) => {
	return (
		<div className="flex gap-10 rounded-xl px-6 py-4 text-3xl bg-card_home text-black">
			<div className="flex flex-col items-start justify-center rounded-xl bg-card_subcard px-6">
				<h3>{weekdays}</h3>
				<h3 className="relative w-full -translate-x-1 text-left text-2 ">
					{date}
					<span className="absolute -bottom-2 text-[1.5rem]">/{month}</span>
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
Announcement.propTypes = {
	weekdays: PropTypes.string.isRequired,
	date: PropTypes.number.isRequired,
	month: PropTypes.string.isRequired,
	course: PropTypes.string.isRequired,
	teacher: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
}

export const TodayClass = ({ course, teacher, room, time }) => {
	return (
		<div className="flex flex-col gap-1 rounded-2xl p-4 text-[1rem] bg-card_home text-black">
			<div className="flex items-center justify-between ">
				<h3 className="line-clamp-1">{course}</h3>
				<h3 className="text-text_gray">{teacher}</h3>
			</div>
			<div className="flex items-center justify-between">
				<h3 className="text-[1.5rem] font-semibold leading-5 text-text_blue">
					{room}
				</h3>
				<h3 className="rounded-full bg-card_blue px-4 py-[2px] text-[#146C94] ">
					{time}
				</h3>
			</div>
		</div>
	)
}
TodayClass.propTypes = {
	course: PropTypes.string.isRequired,
	teacher: PropTypes.string.isRequired,
	room: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
}
