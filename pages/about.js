import Head from 'next/head';

import NavBar from '../components/NavBar.js';

export async function getStaticProps() {
	return {
		props: {
			name: 'Akash Doppalapudi',
		},
	};
}

export const About = (props) => {
	return (
		<div className="bg-gray-900 min-h-screen text-gray-300 p-2 md:p-5">
			<Head>
				<title>Akash Doppalapudi</title>
				<meta name="description" content={`Portfolio of ${props.name}`} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavBar page="about" />
			<main className="opacity-60">
				<div className="mt-6">
					<div className="text-center">
						<div>
							<h3 className="text-lg">
								My name is Akash Doppalapudi. I am from Andhrapradesh, India.
							</h3>
							<h3 className="text-lg">
								I am a self taught programmer. Look below to findout my
								education and skills.
							</h3>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-6 mt-10">
							<div className="my-4 md:m-2 hover:scale-105 transform transition ease-in-out duration-100 md:col-span-1 block p-4 bg-black rounded-md">
								<h3 className="text-md mb-2 font-bold">Education</h3>
								<p>
									Pursued Engineering Degree from{' '}
									<a
										className="underline hover:text-gray-600"
										href="https://www.vvitguntur.com/"
										target="_blank"
										rel="noreferrer"
									>
										VVIT
									</a>
									. Specializing in Electronics and Comunication Engineering.
									<br />
									Batch: 2018 - 2022
								</p>
							</div>
							<div className="my-4 md:m-2 hover:scale-105 transform transition ease-in-out duration-100 md:col-span-1 block p-4 bg-black rounded-md">
								<h3 className="text-md mb-2 font-bold">Skills</h3>
								<ul>
									<li>Programming</li>
									<li>Frontend Web Development</li>
									<li>Backend Web Development</li>
									<li>Datascience</li>
									<li>Machine Learning</li>
								</ul>
							</div>

							<div className="my-4 md:m-2 hover:scale-105 transform transition ease-in-out duration-100 md:col-span-1 block p-4 bg-black rounded-md">
								<h3 className="text-md mb-2 font-bold">Languages</h3>
								<ul>
									<li>C</li>
									<li>C#</li>
									<li>Python</li>
									<li>Java</li>
									<li>Javascript</li>
									<li>HTML</li>
									<li>CSS</li>
								</ul>
							</div>
							<div className="my-4 md:m-2 hover:scale-105 transform transition ease-in-out duration-100 md:col-span-1 block p-4 bg-black rounded-md md:flex md:flex-col md:justify-center">
								<div
									className="w-52 cursor-pointer m-auto bg-gray-800 hover:bg-gray-900 p-3 transition ease-out duration-300 rounded-full"
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
		</div>
	);
};

export default About;
