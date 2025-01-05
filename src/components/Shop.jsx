import styles from '../style/Shop.module.css'
import PropTypes from 'prop-types'
import { useResult } from './ShoppingDataProvider'
import Card from './Card.jsx'

export default function Shop() {
    const res = useResult()
    console.log(res)
    return (
        <div className={styles.shop}>
            {res.data && res.data.map((val) => {
                return (
                    <Card key={val.id} item={val} handleChange={res.change}/>
                )
            })}
        </div>
    )
}

Shop.propTypes = {
    items: PropTypes.object
}