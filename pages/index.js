import Head from 'next/head';

import NavBar from '../components/NavBar';

export default function Home() {
	return (
		<div className="bg-gray-900 flex flex-col min-h-screen text-gray-300 p-2 md:p-5">
			<Head>
				<title>Akash Doppalapudi</title>
				<meta name="description" content="Portfolio of Akash Doppalapudi" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			<main className="p-1 flex flex-grow items-center opacity-60">
				<div className="text-lg md:text-3xl font-bold animate-pan-in-from-left">
					<h2 className="uppercase text-xl md:text-4xl py-1">Hello There!</h2>
					<h2 className="uppercase py-1">
						I am Akash Doppalapudi. I am a Full Stack Developer.
					</h2>
					<h2 className="uppercase py-1">
						Navigate around the page and know more about me.
					</h2>
					<a
						href="https://akashdoppalapudi.hashnode.dev"
						target="_blank"
						className="md:border-2 float-right mt-10 mr-10 md:float-left md:mr-0 md:border-black md:hover:bg-gray-900 bg-black rounded-xl p-2 text-lg md:text:xl cursor-pointer font-bold uppercase hover:scale-95 transform transition ease-in-out duration-100"
					>
						Visit My Blog
					</a>
				</div>
			</main>
		</div>
	);
}
