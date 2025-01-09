import PropTypes from "prop-types"
import styles from "../style/Card.module.css"
import { Link } from 'react-router-dom'

export default function Card({ item, handleChange }) {
    return (
        <>
        <div className={styles.card}>
            <Link to={'/item'+item.id} className={styles.link}>
            <div className={styles.imgContainer}>
                <img src={item.image} alt="" className={styles.itemImg}/>
            </div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.price}>${item.price}</div>
            </Link>
            <input type="number" min={0} max={99} value={item.qty} className={styles.qty} onChange={(e) => handleChange(e, item.id)} onClick={(e) => handleChange(e, item.id)}/>
        </div> 
        </>
    )
}

Card.propTypes = {
    item: PropTypes.object,
    handleChange: PropTypes.func
}