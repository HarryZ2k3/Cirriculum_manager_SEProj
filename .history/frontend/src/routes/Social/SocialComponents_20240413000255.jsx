import PropTypes from 'prop-types'

export const Infor = ({
	content,
}) => {
	return (
		<div className="flex gap-10 rounded-xl px-6 py-4 text-3xl bg-card_home justify-between
        text-black items-start">
            <h3 className="font-normal">{content}</h3>
		</div>
	)
}
Infor.propTypes = {
	content: PropTypes.string.isRequired,
}


export const chats = ({
	weekdays,
	date,
	month,
	course,
	teacher,
	content,
}) => {
	return (
        <div className = "flex flex-col bg-card_home text-black">
            <div className = "mt-4 flex flex-col items-center justify-center gap-3">
                <img
                    className="w-24 rounded-full"
                    src={"https://placehold.co/400"}
                    alt="Avatar"
                />

            </div>
        </div>
		// <div className="flex gap-10 rounded-xl px-6 py-4 text-3xl bg-card_home text-black">
		// 	<div className="flex flex-col items-start justify-center rounded-xl bg-card_subcard px-6">
		// 		<h3>{weekdays}</h3>
		// 		<h3 className="relative w-full translate-x-1 text-left text-2xl ">
		// 			{date}
		// 			<span className="absolute -bottom-2 text-[1.25rem]">/{month}</span>
		// 		</h3>
		// 	</div>
		// 	<div className="flex flex-col items-start justify-between">
		// 		<h3 className="font-normal">{course}</h3>
		// 		<p className="text-[1rem] font-normal">Teacher: {teacher}</p>
		// 		<p className="line-clamp-1 text-[1.25rem]">{content}</p>
		// 	</div>
		// </div>
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

