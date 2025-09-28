import { Advantsges } from '../../components/Advantages';
import { CheckoutForm } from '../../components/CheckoutForm';
import styles from './_checkoutPage.module.scss';
import {t} from '../../utils/i18n.js';

export const CheckoutPage = () => {
    return (
        <>
            <h1 className={styles.title}>{t("Checkout")}</h1>
            <CheckoutForm />
            <Advantsges />
        </>
    );
}