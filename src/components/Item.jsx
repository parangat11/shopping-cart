import { useParams } from 'react-router-dom'
import { useResult } from './ShoppingDataProvider';
import styles from '../style/Item.module.css'
import { Link } from 'react-router-dom';
import { CircleArrowLeft } from 'lucide-react';

export default function Item() {
    const val = useParams()
    const items = (useResult()).data
    const itemId = val.name.replace(/^\D+/g, ''); // Replace all leading non-digits with nothing
    let item = null
    for(let i = 0; i < items.length; i++) {
        if(items[i].id==itemId) {
            item = items[i]
            break
        }
    }
    console.log(item)
    return (
        item &&
        <div className={styles.item}>
            <img src={item.image} alt="" className={styles.image} />
            <div className={styles.title}>{item.title}</div>
            <div className={styles.description}>{item.description}</div>
            <Link to='/shop' className={styles.link}><CircleArrowLeft size={60} /></Link>
        </div>
    )
}