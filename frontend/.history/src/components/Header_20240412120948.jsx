import { Link } from 'react-router-dom'
import Logo from '../assets/logo/logo.png'

export default function Header() {
	return (
		<header className="flex justify-between divide-x-2 divide-black border-b-2 border-black text-[2rem]">
			<div className="flex w-1/2 gap-6 bg-header">
				<img className="inline-block h-20 w-auto" src={Logo} alt="Logo IU" />
				<div className="flex flex-col items-start justify-center">
					<h1 className="uppercase">
						<span className="font-bold">International</span> University
					</h1>
					<span className="text-[1.5rem]">Ho Chi Minh City</span>
				</div>
			</div>
			<div className="w-1/2">
				<ul className="flex h-full justify-between divide-x-2 divide-black bg-header_light">
					<li className="flex w-full justify-center">
						<Link className="p-4" to="/">
							Home
						</Link>
					</li>
					<li className="flex w-full justify-center">
						<Link className="p-4" to="/">
							Social
						</Link>
					</li>
					<li className="flex w-full justify-center">
						<Link className="p-4" to="/">
							Subject
						</Link>
					</li>
					<li className="flex w-full justify-center">
						<Link className="p-4" to="/">
							Schedule
						</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}
