import Image from "next/image";

import NavBar from "../components/NavBar.js";
import styles from "../styles/Projects.module.css";

export const getStaticProps = async () => {
	const res = await fetch(
		"https://api.github.com/users/akashdoppalapudi/repos"
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
		<main className="page-container">
			<NavBar page="projects" />
			<div className="container">
				<div className={styles.repoList}>
					<div className={styles.gitListTitle}>
						<h2>
							Projects on Github that I&#39;ve worked or have been
							working on
						</h2>
					</div>
					{!repos.length && (
						<Image
							src="/spinner.gif"
							alt="spinning circle"
							width="50px"
							height="50px"
						/>
					)}
					<div className={styles.List}>
						{repos.map((repo) => (
							<div
								className={styles.repoName}
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
