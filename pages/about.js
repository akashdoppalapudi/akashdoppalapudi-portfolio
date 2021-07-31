import NavBar from "../components/NavBar.js";
import styles from "../styles/About.module.css";

export const About = () => {
	return (
		<main className="page-container">
			<NavBar page="about" />
			<div className="container">
				<h2>About</h2>
				<div
					className={styles.resumeViewer}
					onClick={() =>
						window.open(
							"https://drive.google.com/file/d/1GJ3Af9tt4zIJztz0eWKQ9tbb8no18Uop/view?usp=sharing",
							"_blank"
						)
					}
				>
					My Résumé
				</div>
			</div>
		</main>
	);
};

export default About;
