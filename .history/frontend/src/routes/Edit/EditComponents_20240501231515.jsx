import PropTypes from 'prop-types'

export const Announcement = ({
	content,
}) => {
	return (
		<div className="flex gap-5 rounded-xl px-6 py-4 text-3xl bg-card_home text-black">
			<div className="flex flex-col items-start justify-between">
				<p className="line-clamp-1 text-[1.25rem]">{content}</p>
			</div>
		</div>
	)
}
Announcement.propTypes = {
	content: PropTypes.string.isRequired,
}

