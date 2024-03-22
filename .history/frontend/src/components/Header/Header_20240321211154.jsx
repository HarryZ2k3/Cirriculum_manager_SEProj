import Transition from '../../utils/Transition'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<Transition className="flex justify-center items-center flex-col">
            <h1>He</h1>
			<Link to="/login">
				<button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
					Login please
				</button>
			</Link>
		</Transition>
	)
}
