import PropTypes from 'prop-types'

export const Chats = ({
	avatar,
    name,
    content
}) => {
	return (
        <div className = "flex flex-col bg-card_home text-black">
            <div className = "mt-4 flex flex-col items-center justify-center gap-3">
                <img
                    className="w-24 rounded-full"
                    src={avatar}
                    alt="Name"
                />
            </div>
            <div className = "flex flex-col items-start justify-between">
                <h3 className = "font-normal">{name}</h3>
                <p className = "text-[1rem] font-normal">{content}</p>

            </div>
        </div>

	)
}
Chats.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    chat: PropTypes.string.isRequired,

}

