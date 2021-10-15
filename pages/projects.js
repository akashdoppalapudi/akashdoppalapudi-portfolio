import NavBar from '../components/NavBar.js';

export const getServerSideProps = async () => {
	const res = await fetch(
		'https://api.github.com/users/akashdoppalapudi/repos'
	);
	const data = await res.json();
	return {
		props: {
			repos: data,
		},
	};
};

export const Projects = ({ repos }) => {
	return (
		<main>
			<NavBar page="projects" />
			<div>
				<div>
					<div>
						<h2>
							Projects on Github that I&#39;ve worked or have been working on
						</h2>
					</div>

					<div>
						{repos.map((repo) => (
							<div
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
				</div>
			</div>
		</main>
	);
};

export default Projects;
