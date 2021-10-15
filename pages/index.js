import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Akash Doppalapudi</title>
				<meta name="description" content="Portfolio of Akash Doppalapudi" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<NavBar />
				<div>
					<div>
						<h2>Hello There!</h2>
						<h2>I am Akash Doppalapudi. I am a Full Stack Developer.</h2>
						<h2>Navigate around the page and know more about me.</h2>
					</div>
				</div>
			</main>
		</div>
	);
}
