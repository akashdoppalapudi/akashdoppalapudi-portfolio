import NavBar from '../components/NavBar.js';

export const About = () => {
	return (
		<main>
			<NavBar page="about" />
			<div>
				<div>
					<div>
						<h3>
							My name is Akash Doppalapudi. I am from Andhrapradesh, India.
						</h3>
						<h3>
							I am a self taught programmer. Look below to findout my education
							and skills.
						</h3>
					</div>
					<div>
						<div>
							<h3>Education</h3>
							<p>
								Pursued Engineering Degree from{' '}
								<a
									href="https://www.vvitguntur.com/"
									target="_blank"
									rel="noreferrer"
								>
									VVIT
								</a>
								. Specializing in Electronics and Comunication Engineering.
								<br />
								Batch: 2k18 - 2k22
							</p>
						</div>
						<div>
							<h3>Skills</h3>
							<ul>
								<li>Programming</li>
								<li>Frontend Web Development</li>
								<li>Backend Web Development</li>
								<li>Datascience</li>
								<li>Machine Learning</li>
							</ul>
						</div>
					</div>
					<div>
						<div>
							<h3>Languages</h3>
							<ul>
								<li>C</li>
								<li>c#</li>
								<li>Python</li>
								<li>Java</li>
								<li>Javascript</li>
								<li>HTML</li>
								<li>CSS</li>
							</ul>
						</div>
						<div>
							<div
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
