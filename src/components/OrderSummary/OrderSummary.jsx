import styles from './_orderSummary.module.scss';
import { CONTENT_ICONS } from '../../constants';
import {Image} from '../Image';

export const OrderSummary = ({data, onClick}) => {
    return(
        <ul className={styles.order__list}>
            { !data || data?.length < 1
            ? (<li className={styles.order__item}>
                    <div className={styles.order__container}>
                        <div className={styles.order__description}>
                            <span className={styles.order__title}>Cart is empty</span>
                        </div>
                    </div>
                </li>)
            : data.map((item) => (
                <li className={styles.order__item} key={item.productId._id}>
                    <div className={styles.order__container}>
                        <span className={styles.order__icon} />
                        <div className={styles.order__description}>
                            <span className={styles.order__title}>{item.productId.title}</span>
                            <div className={styles.order__detail}>
                                <span className={styles.order__detail_text}>{item.productId.formFactor}</span>
                                <span className={styles.order__dot} />
                                <span className={styles.order__detail_text}>{item.productId.color}</span>
                                <span className={styles.order__dot} />
                                <span className={styles.order__detail_text}>{`${item.quantity}x`}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.order__container}>
                        <Image 
                            src={CONTENT_ICONS.trash} 
                            altText='Trash icon' 
                            className={styles.order__delete} 
                            onClick={() => onClick(item.productId._id)} 
                        />
                        <span className={styles.order__costs}>{`$${item.productId.price}`}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
}