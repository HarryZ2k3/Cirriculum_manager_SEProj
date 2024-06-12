import Transition from '../../utils/Transition'
import { Link } from 'react-router-dom'

export default function Register() {
	return (
		<Transition className="flex justify-center items-center flex-col">
			<h1 className="text-5xl font-bold">Welcome to the Register page</h1>
            <Link to ="/R" className = "text-primary hover:underline">
                Home
            </Link>
		</Transition>
	)
}
