import PropTypes from 'prop-types'

export const Announcement = ({
	content,
}) => {
	return (
		<div className="flex gap-10 rounded-xl px-6 py-4 text-3xl bg-card_home text-black">
			<div className="flex flex-col items-start justify-between">
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

