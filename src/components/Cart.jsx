import { Link } from "react-router-dom"
import styles from "../style/Cart.module.css"

export default function Cart() {
    return (
        <div className={styles.cart}>
            <div className="cart">all the products</div>
            <div className="backToHome">
                <Link className={styles.link} to="/">Go back</Link>
            </div>
        </div>
    )
}