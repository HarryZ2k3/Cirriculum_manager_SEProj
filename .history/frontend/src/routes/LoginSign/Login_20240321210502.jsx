import Transition from '../../utils/Transition'
import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<Transition className="flex justify-center items-center flex-col">
			<h1 className="text-5xl font-bold">Welcome to the Home page</h1>

		</Transition>
	)
}
