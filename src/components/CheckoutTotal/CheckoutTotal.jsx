import styles from './_checkoutTotal.module.scss';
import {CHECKOUT_TOTAL} from '../../constants/index';
import {t} from '../../utils/i18n.js';

export const CheckoutTotal = ({data}) => {
    const subtotal = data.reduce((sum, value) => sum + value.productId.price, 0);
    const shippingPrice = CHECKOUT_TOTAL.shippingFee;
    const total = subtotal ? subtotal + shippingPrice : 0;
    return (
        <ul className={styles.total__list}>
            <li className={styles.total__item}>
                <span className={styles.total__text}>{t("Sub total")}</span>
                <span className={styles.total__text}>{`$${subtotal}`}</span>
            </li>
            <li className={styles.total__item}>
                <span className={styles.total__text}>{t("Shipping Fee")}</span>
                <span className={styles.total__text}>{`$${shippingPrice}`}</span>
            </li>
            <li className={styles.total__item}>
                <span className={styles.total__text}>{t("Total")}</span>
                <span className={styles.total__text}>{`$${total}`}</span>
            </li>
        </ul>
    );
}