import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NavBar = (props) => {
	const router = useRouter();

	useEffect(() => {
		const menu = document.querySelector('#menu');
		const about = document.querySelector('#about');
		const projects = document.querySelector('#projects');
		const contact = document.querySelector('#contact');
		menu.classList.add('hidden');
		switch (props.page) {
			case 'about':
				about.classList.add('bg-gray-700', 'cursor-default', 'font-bold');
				about.classList.remove('cursor-pointer', 'hover:bg-gray-900');
				break;
			case 'projects':
				projects.classList.add('bg-gray-700', 'cursor-default', 'font-bold');
				projects.classList.remove('cursor-pointer', 'hover:bg-gray-900');
				break;
			case 'contact':
				contact.classList.add('bg-gray-700', 'cursor-default', 'font-bold');
				contact.classList.remove('cursor-pointer', 'hover:bg-gray-900');
				break;
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
				<div
					className="text-xl cursor-pointer font-bold md:uppercase hover:scale-95 transform transition ease-in-out duration-100"
					onClick={() => router.push('/')}
				>
					<h1>{props.header}</h1>
				</div>
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
				className="text-center md:col-span-5 md:grid md:grid-cols-5"
			>
				<div className="md:col-span-3 md:flex md:justify-center md:mx-8">
					<div
						className="my-3 md:mx-6 md:my-0 cursor-pointer py-1 hover:bg-gray-900 px-3 transition ease-out duration-300 rounded-full"
						onClick={() => router.push('/about')}
						id="about"
					>
						About
					</div>
					<div
						className="my-3 md:mx-6 md:my-0 cursor-pointer py-1 hover:bg-gray-900 px-3 transition ease-out duration-300 rounded-full"
						onClick={() => router.push('/projects')}
						id="projects"
					>
						Projects
					</div>
					<div
						className="my-3 md:mx-6 md:my-0 cursor-pointer py-1 hover:bg-gray-900 px-3 transition ease-out duration-300 rounded-full"
						onClick={() => router.push('/contact')}
						id="contact"
					>
						Contact
					</div>
				</div>
				<div className="md:col-span-2 md:flex md:justify-end">
					<div
						className="my-3 md:mx-6 md:my-0 cursor-pointer p-1 hover:underline transform transition ease-in-out duration-100"
						onClick={() => window.open(props.githubProfileURL, '_blank')}
					>
						Github
					</div>
					<div
						className="my-3 md:mx-6 md:my-0 cursor-pointer p-1 hover:underline transform transition ease-in-out duration-100"
						onClick={() => window.open(props.linkedInProfileURL, '_blank')}
					>
						Linkedin
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
