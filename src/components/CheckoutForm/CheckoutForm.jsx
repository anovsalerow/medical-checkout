import {Input} from '../Input';
import {InputRadio} from '../InpitRadio';
import {InputPromo} from '../InputPromo';
import { CheckoutTotal } from '../CheckoutTotal';
import {ORDER_SUMMARY, CHECKOUT_TOTAL} from '../../constants';
import styles from './_checkoutForm.module.scss';

export const CheckoutForm = () => {
    return (
        <div>
            <form>
                <h2>Personal Details</h2>
                <Input type='text' name='fullName' placeholder='Full Name' legend='Full Name' />
                <Input type='email' name='email' placeholder='Email Address' legend='Email Address' />
                <Input type='tel' name='phoneNumber' placeholder='Phone number' legend='Phone number' />
                <h2>Shipping Details</h2>
                <Input type='address' name='address' placeholder='Street Address' legend='Street Address' />
                <div>
                    <Input type='text' name='city' placeholder='City' legend='City' />
                    <Input type='text' name='zipCode' placeholder='Zip Code' legend='Zip Code' />
                </div>
                <h2>Shipping Methode</h2>
                <fieldset>
                    <InputRadio name='shippingMethod' label='Odeon Express' value='Odeon Express' />
                    <InputRadio name='shippingMethod' label='Gorgom Express' value='Gorgom Express' />
                    <InputRadio name='shippingMethod' label='Cipay Jet' value='Cipay Jet' />
                    <InputRadio name='shippingMethod' label='Eunioa Fast' value='Eunioa Fast' />
                </fieldset>
                <h2>Payment Methode</h2>
                <fieldset>
                    <InputRadio name='paymentMethod' label='Credit Card' value='Credit Card' />
                    <InputRadio name='paymentMethod' label='Paypal' value='Paypal' />
                </fieldset>
                <h2>Order Summary</h2>
                <ul className={styles.order__list}>
                    {ORDER_SUMMARY.map(({title, type, color, amount, costs}, index) => (
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
                <h2>Apply Promocode</h2>
                <InputPromo />
                <CheckoutTotal data={CHECKOUT_TOTAL} />
            </form>
        </div>
    );
}