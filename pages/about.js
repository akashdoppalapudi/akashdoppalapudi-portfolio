import NavBar from '../components/NavBar.js';
import styles from '../styles/About.module.css';

export const About = () => {
	return (
		<main className="page-container">
			<NavBar page="about" />
			<div className="container">
				<div>
					<div className={styles.basicBio}>
						<h3>
							My name is Akash Doppalapudi. I am from Andhrapradesh, India.
						</h3>
						<h3>
							I am a self taught programmer. Look below to findout my education
							and skills.
						</h3>
					</div>
					<div className={styles.Row}>
						<div className={styles.Col}>
							<h3>Education</h3>
							<p>
								Pursued Engineering Degree from{' '}
								<a
									href="https://www.vvitguntur.com/"
									target="_blank"
									rel="noreferrer"
									className={styles.link}
								>
									VVIT
								</a>
								. Specializing in Electronics and Comunication Engineering.
								<br />
								Batch: 2k18 - 2k22
							</p>
						</div>
						<div className={styles.Col}>
							<h3>Skills</h3>
							<ul className={styles.skillsList}>
								<li>Programming</li>
								<li>Frontend Web Development</li>
								<li>Backend Web Development</li>
								<li>Datascience</li>
								<li>Machine Learning</li>
							</ul>
						</div>
					</div>
					<div className={styles.Row}>
						<div className={styles.Col}>
							<h3>Languages</h3>
							<ul className={styles.skillsList}>
								<li>C</li>
								<li>Python</li>
								<li>Java</li>
								<li>Javascript</li>
								<li>HTML</li>
								<li>Javascript</li>
							</ul>
						</div>
						<div className={styles.Col}>
							<div
								className={styles.resumeViewer}
								onClick={() =>
									window.open(
										'https://drive.google.com/file/d/1GJ3Af9tt4zIJztz0eWKQ9tbb8no18Uop/view?usp=sharing',
										'_blank'
									)
								}
							>
								My Résumé
							</div>{' '}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default About;
