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


