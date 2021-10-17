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
					<h2 className="text-xl md:text-4xl py-1">Hello There!</h2>
					<h2 className="py-1">
						I am Akash Doppalapudi. I am a Full Stack Developer.
					</h2>
					<h2 className="py-1">
						Navigate around the page and know more about me.
					</h2>
				</div>
			</main>
		</div>
	);
}
