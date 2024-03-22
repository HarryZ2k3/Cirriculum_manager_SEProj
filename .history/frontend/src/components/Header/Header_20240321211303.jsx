import Transition from '../../utils/Transition'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<Transition className="flex justify-center items-center flex-col">
            <h1>Here is the Header</h1>
			<Link to="/">
				<button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
					Home
				</button>
			</Link>
            <Link to="/grade">
				<button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
					Grade
				</button>
			</Link>
            <Link to="/subject">
				<button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
					Login please
				</button>
			</Link>
            <Link to="/login">
				<button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
					Login please
				</button>
			</Link>
		</Transition>
	)
}
