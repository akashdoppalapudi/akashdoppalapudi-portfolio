import Head from 'next/head';

import NavBar from '../components/NavBar.js';
import {
	name,
	location,
	resumeURL,
	vvitWebsiteURL,
	githubProfileURL,
	linkedInProfileURL,
	skills,
	languages,
} from '../data/data';

export async function getStaticProps() {
	return {
		props: {
			name: name,
			location: location,
			resumeURL: resumeURL,
			vvitWebsiteURL: vvitWebsiteURL,
			githubProfileURL: githubProfileURL,
			linkedInProfileURL: linkedInProfileURL,
			skills: skills,
			languages: languages,
		},
	};
}

export const About = (props) => {
	return (
		<div className="bg-gray-900 min-h-screen text-gray-300 p-2 md:p-5">
			<Head>
				<title>{props.name}</title>
				<meta name="description" content={`Portfolio of ${props.name}`} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavBar
				page="about"
				header={props.name}
				githubProfileURL={props.githubProfileURL}
				linkedInProfileURL={props.linkedInProfileURL}
			/>
			<main className="opacity-60">
				<div className="mt-6">
					<div className="text-center">
						<div>
							<h3 className="text-lg">
								My name is {props.name}. I am from {props.location}.
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
										href={props.vvitWebsiteURL}
										target="_blank"
										rel="noreferrer"
									>
										VVIT
									</a>
									. Specializing in Electronics and Communication Engineering.
									<br />
									Batch: 2018 - 2022
								</p>
							</div>
							<div className="my-4 md:m-2 hover:scale-105 transform transition ease-in-out duration-100 md:col-span-1 block p-4 bg-black rounded-md">
								<h3 className="text-md mb-2 font-bold">Skills</h3>
								<ul>
									{props.skills.map((skill, index) => (
										<li key={index}>{skill}</li>
									))}
								</ul>
							</div>

							<div className="my-4 md:m-2 hover:scale-105 transform transition ease-in-out duration-100 md:col-span-1 block p-4 bg-black rounded-md">
								<h3 className="text-md mb-2 font-bold">Languages</h3>
								<ul>
									{props.languages.map((lang, index) => (
										<li key={index}>{lang}</li>
									))}
								</ul>
							</div>
							<div className="my-4 md:m-2 hover:scale-105 transform transition ease-in-out duration-100 md:col-span-1 block p-4 bg-black rounded-md md:flex md:flex-col md:justify-center">
								<div
									className="w-52 cursor-pointer m-auto bg-gray-800 hover:bg-gray-900 p-3 transition ease-out duration-300 rounded-full"
									onClick={() => window.open(props.resumeURL, '_blank')}
								>
									My Résumé
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default About;
