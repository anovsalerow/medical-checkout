import styles from './_checkoutTotal.module.scss';

export const CheckoutTotal = ({data}) => {
    return (
        <ul className={styles.total__list}>
            {data.map(({title, costs}, index) => (
                <li className={styles.total__item} key={index}>
                    <span className={styles.total__text}>{title}</span>
                    <span className={styles.total__text}>{costs}</span>
                </li>
            ))}
        </ul>
    );
}