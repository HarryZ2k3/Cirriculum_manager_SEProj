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
	user_avatar,
    name,
    last_chat
}) => {
	return (
        <div className = "flex flex-col bg-card_home text-black">
            <div className = "mt-4 flex flex-col items-center justify-center gap-3">
                <img
                    className="w-24 rounded-full"
                    src={user_avatar}
                    alt="Name"
                />
            </div>
            <div className = "flex flex-col items-start justify-between">
                <h3 className = "font-normal">{name}</h3>
                <p className = "text-[1rem] font-normal">{last_chat}</p>

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

