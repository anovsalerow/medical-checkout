import { Advantsges } from '../../components/Advantages';
import { CheckoutForm } from '../../components/CheckoutForm';
import styles from './_checkoutPage.module.scss';

export const CheckoutPage = () => {
    return (
        <>
            <h1 className={styles.title}>Checkout</h1>
            <CheckoutForm />
            <Advantsges />
        </>
    );
}