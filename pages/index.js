import Head from "next/head";
import styles from "../styles/Home.module.css";

import NavBar from "../components/NavBar";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Akash Doppalapudi</title>
				<meta
					name="description"
					content="Portfolio of Akash Doppalapudi"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="page-container">
				<NavBar />
				<div className="container">
					<h2>Landing Page</h2>
				</div>
			</main>
		</div>
	);
}
