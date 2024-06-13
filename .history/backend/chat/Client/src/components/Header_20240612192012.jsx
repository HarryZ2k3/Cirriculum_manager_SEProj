import { Link } from 'react-router-dom'
import Logo from '../assets/logo/logo.png'

export default function Header() {
	return (
		<header className="flex justify-between divide-x-2 divide-black border-b-2 border-black text-[1.5rem] text-black">
			<div className="flex w-1/2 gap-6 bg-header_bold border border-black">
				<img className="inline-block h- w-auto border border-black" src={Logo} alt="Logo IU" />
				<div className="flex flex-col items-start justify-center">
					<h1 className="uppercase">
						<span className="font-bold">International</span> University
					</h1>
					<span className="text-[1rem]">Ho Chi Minh City</span>
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
						<Link className="p-4" to="/social">
							Social
						</Link>
					</li>
					<li className="flex w-full justify-center">
						<Link className="p-4" to="/subject">
							Subject
						</Link>
					</li>
					<li className="flex w-full justify-center">
						<Link className="p-4" to="/schedule">
							Schedule
						</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}
