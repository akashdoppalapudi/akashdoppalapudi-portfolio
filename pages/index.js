import Head from 'next/head';
import styles from '../styles/Home.module.css';

import NavBar from '../components/NavBar';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Akash Doppalapudi</title>
				<meta name="description" content="Portfolio of Akash Doppalapudi" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="page-container">
				<NavBar />
				<div className="container">
					<div className={styles.greetingBox}>
						<h2 className={styles.heading}>Hello There!</h2>
						<h2 className={styles.greetingText}>
							I am Akash Doppalapudi. I am a Full Stack Developer.
						</h2>
						<h2 className={styles.greetingText}>
							Navigate around the page and know more about me.
						</h2>
					</div>
				</div>
			</main>
		</div>
	);
}
