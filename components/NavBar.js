import { useRouter } from "next/router";

import styles from "../styles/NavBar.module.css";

const NavBar = ({ page }) => {
	const router = useRouter();
	return (
		<nav className={styles.navbar}>
			<div className={styles.brand} onClick={() => router.push("/")}>
				<h1>Akash Doppalapudi</h1>
			</div>

			<div className={styles.navlinks}>
				<div
					id={page === "about" ? styles.active : null}
					className={styles.navlink}
					onClick={() => router.push("/about")}
				>
					About
				</div>
				<div
					id={page === "projects" ? styles.active : null}
					className={styles.navlink}
					onClick={() => router.push("/projects")}
				>
					Projects
				</div>
				<div
					id={page === "contact" ? styles.active : null}
					className={styles.navlink}
					onClick={() => router.push("/contact")}
				>
					Contact
				</div>
				<div
					className={styles.navlink}
					onClick={() =>
						window.open(
							"https://github.com/akashdoppalapudi",
							"_blank"
						)
					}
				>
					Github
				</div>
				<div
					className={styles.navlink}
					onClick={() =>
						window.open(
							"https://www.linkedin.com/in/akashdoppalapudi/",
							"_blank"
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
