import Transition from '../../utils/Transition'
import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<Transition className="flex justify-center items-center flex-col">
			<h1 className="text-5xl font-bold">Welcome to the Home page</h1>
			<Link to="/podcast">
				<button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
					Listening
				</button>
			</Link>
			<Link to="/booklist">
				<button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
					Reading
				</button>
			</Link>
			<br />
			<Link to="/login">
				<button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
					Login please
				</button>
			</Link>
		</Transition>
	)
}
