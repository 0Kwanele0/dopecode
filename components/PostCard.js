import styles from "../styles/card.module.css";
import { useRouter } from "next/dist/client/router";

function PostCard({ item }) {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/post/${item.slug.current}`)}
            className={styles.card}
        >
            <img src={item.mainImage} alt="article cover" />
            <h2>{item.title}</h2>
            <p className={styles.date}>{item._createdAt}</p>
            <p className={styles.description}>
                {item.description.slice(0, 120)}...
            </p>
            <ul className={styles.taglist}>
                {item.categories.map((tag, key) => {
                    return (
                        <li className={styles.tag} key={key}>
                            {tag}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default PostCard;
