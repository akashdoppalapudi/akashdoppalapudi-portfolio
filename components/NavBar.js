import { useRouter } from 'next/router';

const NavBar = ({ page }) => {
	const router = useRouter();
	return (
		<nav>
			<div onClick={() => router.push('/')}>
				<h1>Akash Doppalapudi</h1>
			</div>

			<div>
				<div
					id={page === 'about' ? styles.active : null}
					onClick={() => router.push('/about')}
				>
					About
				</div>
				<div
					id={page === 'projects' ? styles.active : null}
					onClick={() => router.push('/projects')}
				>
					Projects
				</div>
				<div
					id={page === 'contact' ? styles.active : null}
					onClick={() => router.push('/contact')}
				>
					Contact
				</div>
				<div
					onClick={() =>
						window.open('https://github.com/akashdoppalapudi', '_blank')
					}
				>
					Github
				</div>
				<div
					onClick={() =>
						window.open(
							'https://www.linkedin.com/in/akashdoppalapudi/',
							'_blank'
						)
					}
				>
					Linkedin
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
