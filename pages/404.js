import styles from "../styles/404.module.css";
import { useRouter } from "next/dist/client/router";

export default function Index () {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <p>Sorry! There are no posts in this Category.</p>
            <button
                onClick={() => {
                    router.push("/");
                }}
            >
                Homepage
            </button>
        </div>
    );
}
