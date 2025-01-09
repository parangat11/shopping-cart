import { Link } from "react-router-dom"
import { useResult } from "./ShoppingDataProvider"
import styles from "../style/Cart.module.css"
import { useMemo } from "react"
import { ShoppingBag } from "lucide-react"

export default function Cart() {
    const res = useResult()
    const items = res.data.filter((item) => item.qty > 0)
    const amount = useMemo(() => 
        items.reduce((total, currentItem) => total + currentItem.price * currentItem.qty, 0)
    , [items])
    if(!items || items.length === 0) {
        return (
            <>
            <div className={styles.empty}>
                Your cart is empty! <Link className={styles.link} to="/shop">Go back to shop more <ShoppingBag size={60}/></Link>
            </div>
            </>
        )
    }
    return (
        <>
        <div className={styles.cart}>
            <div className={styles.col}>
                <div className={styles.imgCol}>Image</div>
                <div className={styles.titleCol}>Title</div>
                <div className={styles.priceCol}>Price</div>
                <div className={styles.qtyCol}>Quantity</div>
            </div>
            {items.map((item) => {
                return (
                    <div key={item.id} className={styles.item}>
                        <img src={item.image} className={styles.image} alt="" />
                        <div className={styles.name}>{item.title}</div>
                        <div className={styles.itemPrice}>{item.price}</div>
                        <div className={styles.itemQty}>{item.qty}</div>
                    </div>
                )
            })}
            <div className={styles.total}>Total cost: ${Math.round(amount * 100) / 100}</div>
            <Link className={styles.link} to='#'><button className={styles.btn}>Checkout</button></Link>
        </div>
        </>
    )
}