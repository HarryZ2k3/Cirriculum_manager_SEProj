import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'

export default function Transition({ children, className, style }) {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				className={'flex-grow ' + className}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					duration: 0.4,
					ease: 'easeInOut',
				}}
				style={{style}}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}

Transition.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	style: PropTypes.
}
