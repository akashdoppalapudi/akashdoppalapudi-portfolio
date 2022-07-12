import Head from 'next/head';
import { useEffect, useState } from 'react';

import NavBar from '../components/NavBar.js';
import {
	name,
	githubProfileURL,
	linkedInProfileURL,
	githubAPIURL,
	githubToken,
} from '../data/data';

export async function getStaticProps() {
	return {
		props: {
			name: name,
			githubProfileURL: githubProfileURL,
			linkedInProfileURL: linkedInProfileURL,
			githubAPIURL: githubAPIURL,
			githubToken: githubToken,
		},
	};
}

export const Projects = (props) => {
	const [repos, setRepos] = useState([]);
	const [displayRepos, setDisplayRepos] = useState([]);
	useEffect(async () => {
		const res = await fetch(props.githubAPIURL, {
			headers: {
				Authorization: `token ${props.githubToken}`,
			},
		});
		const data = await res.json();
		setRepos(data);
		setDisplayRepos(data);
	}, []);

	return (
		<div className="bg-gray-900 min-h-screen text-gray-300 p-2 md:p-5">
			<Head>
				<title>{props.name}</title>
				<meta name="description" content={`Portfolio of ${props.name}`} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar
				page="projects"
				header={props.name}
				githubProfileURL={props.githubProfileURL}
				linkedInProfileURL={props.linkedInProfileURL}
			/>
			<main className="opacity-60">
				<div className="mt-6">
					<div className="text-center">
						<h2 className="text-lg">
							Projects on Github that I&#39;ve worked or have been working on
						</h2>
					</div>
					{!repos.length ? (
						<div className="w-full mt-56 flex justify-center items-center text-xl opacity-50">
							<p>Loading...</p>
						</div>
					) : (
						<>
							<div className="px-2 mt-4 flex justify-center">
								<svg
									className="w-6 h-6 mt-1 mr-2"
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
								</svg>
								<input
									className="px-2 h-8 w-11/12 rounded-md bg-black md:w-1/2"
									type="text"
									placeholder="Search..."
									onChange={(e) => {
										setDisplayRepos(
											repos.filter((repo) =>
												repo.name
													.toLowerCase()
													.trim()
													.includes(e.target.value.toLowerCase().trim())
											)
										);
									}}
								/>
							</div>
							<div className="block md:grid md:grid-cols-3 mt-4 md:mt-8 gap-4 text-center">
								{displayRepos.map((repo) => (
									<div
										className="m-2 md:col-span-1 cursor-pointer bg-black rounded-md p-8 hover:scale-105 transform transition ease-in-out duration-100 items-center"
										key={repo.id}
										onClick={() =>
											window.open(`${props.githubProfileURL}/${repo.name}`)
										}
									>
										<h3>{repo.name}</h3>
									</div>
								))}
							</div>
						</>
					)}
				</div>
			</main>
		</div>
	);
};

export default Projects;
