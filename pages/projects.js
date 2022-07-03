import Head from 'next/head';
import { useEffect, useState } from 'react';

import NavBar from '../components/NavBar.js';

export const Projects = () => {
	const [repos, setRepos] = useState(null);
	useEffect(async () => {
		const res = await fetch(
			'https://api.github.com/users/akashdoppalapudi/repos',
			{
				headers: {
					Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
				},
			}
		);
		const data = await res.json();
		setRepos(data);
	}, []);
	return (
		<div className="bg-gray-900 min-h-screen text-gray-300 p-2 md:p-5">
			<Head>
				<title>Akash Doppalapudi</title>
				<meta name="description" content="Portfolio of Akash Doppalapudi" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar page="projects" />
			<main className="opacity-60">
				<div className="mt-6">
					<div className="text-center">
						<h2 className="text-lg">
							Projects on Github that I&#39;ve worked or have been working on
						</h2>
					</div>
					{!repos ? (
						<div className="w-full mt-56 flex justify-center items-center text-xl opacity-50">
							<p>Loading...</p>
						</div>
					) : (
						<div className="block md:grid md:grid-cols-3 mt-4 md:mt-8 gap-4 text-center">
							{repos.map((repo) => (
								<div
									className="m-2 md:col-span-1 cursor-pointer bg-black rounded-md p-8 hover:scale-105 transform transition ease-in-out duration-100 items-center"
									key={repo.id}
									onClick={() =>
										window.open(
											`https://github.com/akashdoppalapudi/${repo.name}`
										)
									}
								>
									<h3>{repo.name}</h3>
								</div>
							))}
						</div>
					)}
				</div>
			</main>
		</div>
	);
};

export default Projects;
