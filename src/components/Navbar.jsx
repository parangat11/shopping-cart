import { Link } from "react-router-dom"
import { ShoppingCart } from "lucide-react"
import styles from "../style/Navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link className={styles.link} to="/">Home</Link>
            <Link className={styles.link} to="/shop">Shop</Link>
            <Link className={styles.link} to="/cart">
                <ShoppingCart size={50} />
            </Link>
        </div>
    )
}