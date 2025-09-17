import styles from './_orderSummary.module.scss';

export const OrderSummary = ({data}) => {
    return(
        <ul className={styles.order__list}>
            {data.map(({title, type, color, amount, costs}, index) => (
                <li className={styles.order__item} key={index}>
                    <div className={styles.order__container}>
                        <span className={styles.order__icon} />
                        <div className={styles.order__description}>
                            <span className={styles.order__title}>{title}</span>
                            <div className={styles.order__detail}>
                                <span className={styles.order__detail_text}>{type}</span>
                                <span className={styles.order__dot} />
                                <span className={styles.order__detail_text}>{color}</span>
                                <span className={styles.order__dot} />
                                <span className={styles.order__detail_text}>{amount}</span>
                            </div>
                        </div>
                    </div>
                    <span className={styles.order__costs}>{costs}</span>
                </li>
            ))}
        </ul>
    );
}