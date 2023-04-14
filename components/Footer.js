import styles from "../styles/footer.module.css";
import Link from "next/dist/client/link";
import Menu from "./Menu";
import Profile from "./Profile";

function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Link href="/">
                        My<span>Dope</span>Code
                    </Link>
                    <p>
                        A blog by a developer.
                        <br />
                        For Web lovers.
                    </p>
                    <p>
                        Built by{" "}
                        <a href="https://kwanele.netlify.app" target="blank">
                            Kwanele Gamedze
                        </a>
                    </p>
                </div>
                <div className={styles.menu}>
                    <h3>Categories</h3>
                    <nav className={styles.navigator}>
                        <Menu />
                    </nav>
                </div>
                <Profile />
            </div>
        </footer>
    );
}

export default Footer;
