import Head from 'next/head';

import NavBar from '../components/NavBar';

export default function Home() {
	return (
		<div className="bg-gray-900 min-h-screen text-gray-300 p-2 md:p-5">
			<Head>
				<title>Akash Doppalapudi</title>
				<meta name="description" content="Portfolio of Akash Doppalapudi" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<NavBar />
				<div>
					<div>
						<h2 className="text-red-600">Hello There!</h2>
						<h2>I am Akash Doppalapudi. I am a Full Stack Developer.</h2>
						<h2>Navigate around the page and know more about me.</h2>
					</div>
				</div>
			</main>
		</div>
	);
}
