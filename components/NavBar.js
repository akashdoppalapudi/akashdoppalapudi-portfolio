import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect } from 'react';

const NavBar = (props) => {
	const router = useRouter();

	useEffect(() => {
		if (props.page) {
			const pageBtn = document.querySelector(`#${props.page}`);
			pageBtn.classList.add('bg-gray-700', 'cursor-default', 'font-bold');
			pageBtn.classList.remove('cursor-pointer', 'hover:bg-gray-900');
		}
	}, [props.page]);

	const menuClickHandler = () => {
		const menu = document.querySelector('#menu');
		const header = document.querySelector('header');
		menu.classList.toggle('hidden');
		header.classList.toggle('mb-5');
	};

	return (
		<nav className="bg-black opacity-50 p-3 md:p-4 md:grid md:grid-cols-7 items-center rounded-md mb-2">
			<header className="flex justify-between md:mb-0 md:col-span-2">
				<Link href="/">
					<a className="text-xl cursor-pointer font-bold md:uppercase hover:scale-95 transform transition ease-in-out duration-100">
						{props.header}
					</a>
				</Link>
				<button
					className="hover:bg-gray-900 px-2 rounded md:hidden"
					onClick={menuClickHandler}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</header>
			<div
				id="menu"
				className="text-center hidden md:visible md:col-span-5 md:grid md:grid-cols-5"
			>
				<div className="md:col-span-3 flex flex-col md:flex-row md:justify-center md:mx-8">
					<Link href="/about">
						<a
							className="my-1.5 md:mx-6 md:my-0 cursor-pointer py-1 hover:bg-gray-900 px-3 transition ease-out duration-300 rounded-full"
							id="about"
						>
							About
						</a>
					</Link>
					<Link href="/projects">
						<a
							className="my-1.5 md:mx-6 md:my-0 cursor-pointer py-1 hover:bg-gray-900 px-3 transition ease-out duration-300 rounded-full"
							id="projects"
						>
							Projects
						</a>
					</Link>
					<Link href="/contact">
						<a
							className="my-1.5 md:mx-6 md:my-0 cursor-pointer py-1 hover:bg-gray-900 px-3 transition ease-out duration-300 rounded-full"
							id="contact"
						>
							Contact
						</a>
					</Link>
				</div>
				<div className="md:col-span-2 flex flex-col md:flex-row md:justify-end">
					<a
						href={props.githubProfileURL}
						target="_blank"
						className="my-1.5 md:mx-6 md:my-0 cursor-pointer p-1 hover:underline transform transition ease-in-out duration-100"
					>
						Github
					</a>
					<a
						href={props.linkedInProfileURL}
						target="_blank"
						className="my-1.5 md:mx-6 md:my-0 cursor-pointer p-1 hover:underline transform transition ease-in-out duration-100"
					>
						Linkedin
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
