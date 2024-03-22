import Transition from '../../utils/Transition'
import { Link } from 'react-router-dom'

export default function Grade() {
	return (
		<Transition className="flex justify-center items-center flex-col">
            <h1>Welcome to homepage</h1>
			<Link to="/login">
			</Link>
		</Transition>
	)
}
