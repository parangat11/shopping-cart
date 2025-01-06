import PropTypes from "prop-types"
import styles from "../style/Card.module.css"

export default function Card({ item, handleChange }) {
    console.log(item)
    return (
        <div className={styles.card}>
            <div className={styles.imgContainer}>
                <img src={item.image} alt="" className={styles.itemImg}/>
            </div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.price}>${item.price}</div>
            <input type="number" min={0} max={99} value={item.qty} className={styles.qty} onChange={(e) => handleChange(e, item.id)} />
        </div> 
    )
}

Card.propTypes = {
    item: PropTypes.object,
    handleChange: PropTypes.func
}