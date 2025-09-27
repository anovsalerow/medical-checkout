import {useForm} from 'react-hook-form';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchCart, removeFromCart, checkoutCart, addDemoProducts} from '../../store/slices/cartSlice.js';
import {joiResolver} from '@hookform/resolvers/joi';
import {Input} from '../Input';
import {InputRadio} from '../InputRadio';
import {InputPromo} from '../InputPromo';
import { CheckoutTotal } from '../CheckoutTotal';
import {OrderSummary} from '../OrderSummary';
import {SubmitButton} from '../SubmitButton';
import { CheckoutFormValidationSchema } from '../Schemas/CheckoutFormValidationSchema.js';
import styles from './_checkoutForm.module.scss';

export const CheckoutForm = () => {
    const { items, loading, successMessage } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const {
        register, 
        handleSubmit, 
        reset,
        formState: {errors}
    } = useForm({
        resolver: joiResolver(CheckoutFormValidationSchema),
        mode: 'onBlur'}
    );

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                dispatch({ type: 'cart/clearSuccessMessage' });
            }, 4000);
            dispatch(addDemoProducts());

            return () => clearTimeout(timer);
        }
    }, [successMessage, dispatch]);

    const handleRemoveItem = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const handleCheckout = async(data) => {
        dispatch(checkoutCart(data));
        reset();
    };

    if (loading) return <p styles={styles.loading}>Loading</p>

    return (
        <form className={styles.form} onSubmit={handleSubmit(handleCheckout)}>
            <div className={styles.grid_cell}>
                <ul className={styles.block_input__list}>
                    <li className={styles.block_input__title}>
                        <h2>Personal Details</h2>
                    </li>
                    <li className={styles.block_input__item}>
                        <Input 
                            {...register('fullName')} 
                            type='text' 
                            name='fullName' 
                            placeholder='Full Name' 
                            legend='Full Name' 
                        />
                        {errors.fullName && <p className={styles.validation_error}>{errors.fullName.message}</p>}
                    </li>
                    <li className={styles.block_input__item}>
                        <Input 
                            {...register('email')} 
                            type='email' 
                            name='email' 
                            placeholder='Email Address' 
                            legend='Email Address' 
                        />
                        {errors.email && <p className={styles.validation_error}>{errors.email.message}</p>}
                    </li>
                    <li className={styles.block_input__item}>
                        <Input 
                            {...register('phoneNumber')} 
                            type='tel' 
                            name='phoneNumber' 
                            placeholder='Phone number' 
                            legend='Phone number' 
                        />
                        {errors.phoneNumber && <p className={styles.validation_error}>{errors.phoneNumber.message}</p>}
                    </li>
                </ul>
                <ul className={styles.block_input__list}>
                    <li className={styles.block_input__title}>
                        <h2>Shipping Details</h2>
                    </li>
                    <li className={styles.block_input__item}>
                        <Input 
                            {...register('address')} 
                            type='address' 
                            name='address' 
                            placeholder='Street Address' 
                            legend='Street Address' 
                        />
                        {errors.address && <p className={styles.validation_error}>{errors.address.message}</p>}
                    </li>
                    <li className={styles.block_input__item_small}>
                        <Input 
                            {...register('city')} 
                            type='address' 
                            name='city' 
                            placeholder='City' 
                            legend='City' 
                        />
                        {errors.city && <p className={styles.validation_error}>{errors.city.message}</p>}
                    </li>
                    <li className={styles.block_input__item_small}>
                        <Input 
                            {...register('zipCode')} 
                            type='text' 
                            name='zipCode' 
                            placeholder='Zip Code' 
                            legend='Zip Code' 
                        />
                        {errors.zipCode && <p className={styles.validation_error}>{errors.zipCode.message}</p>}
                    </li>
                    <li className={styles.block_input__item}>
                        <Input 
                            {...register('country')} 
                            type='address' 
                            name='country' 
                            placeholder='Country' 
                            legend='Country' 
                        />
                        {errors.country && <p className={styles.validation_error}>{errors.country.message}</p>}
                    </li>
                </ul>
                <ul className={styles.block_radio__list}>
                    <li className={styles.block_radio__subtitle}>
                        <h2>Shipping Methode</h2>
                    </li>
                    <li className={styles.block_radio__item}>
                        <InputRadio
                            {...register('shippingMethod')}
                            name='shippingMethod' 
                            label='Odeon Express' 
                            value='Odeon Express' 
                        />
                    </li>
                    <li className={styles.block_radio__item}>
                        <InputRadio 
                            {...register('shippingMethod')}
                            name='shippingMethod' 
                            label='Gorgom Express' 
                            value='Gorgom Express' 
                        />
                    </li>
                    <li className={styles.block_radio__item}>
                        <InputRadio 
                            {...register('shippingMethod')}
                            name='shippingMethod' 
                            label='Cipay Jet' 
                            value='Cipay Jet' 
                        />
                    </li>
                    <li className={styles.block_radio__item}>
                        <InputRadio 
                            {...register('shippingMethod')}
                            name='shippingMethod' 
                            label='Eunioa Fast' 
                            value='Eunioa Fast' 
                        />
                    </li>
                    {errors.shippingMethod && <p className={styles.validation_error}>{errors.shippingMethod.message}</p>}
                </ul>
                <ul className={styles.block_radio__list}>
                    <li className={styles.block_radio__title}>
                        <h2>Payment Methode</h2>
                    </li>
                    <li className={styles.block_radio__item}>
                        <InputRadio 
                            {...register('paymentMethod')}
                            name='paymentMethod' 
                            label='Credit Card' 
                            value='Credit Card' 
                        />
                    </li>
                    <li className={styles.block_radio__item}>
                        <InputRadio
                        {...register('paymentMethod')}
                            name='paymentMethod' 
                            label='Paypal' 
                            value='Paypal' 
                        />
                    </li>
                    {errors.paymentMethod && <p className={styles.validation_error}>{errors.paymentMethod.message}</p>}
                </ul>
            </div>
            <div className={styles.grid_cell}>
                <ul className={styles.block_order__list}>
                    <li className={styles.block_order__title}>
                        <h2>Order Summary</h2>
                    </li>
                    <li className={styles.block_order__item}>
                        <OrderSummary data={items} onClick={(itemId) => handleRemoveItem(itemId)} />
                    </li>
                </ul>
                <ul className={styles.block_payment__list}>
                    <li className={styles.block_order__title}>
                        <h2>Apply Promocode</h2>
                    </li>
                    <li className={styles.block_order__item}>
                        <InputPromo {...register('promoCode')} />
                        {errors.promoCode && <p className={styles.validation_error}>{errors.promoCode.message}</p>}
                    </li>
                    <li className={styles.block_order__item}>
                        <CheckoutTotal data={items} />
                    </li>
                    <li className={styles.block_order__item}>
                        <SubmitButton text={!successMessage ? "Checkout" : successMessage}/>
                        {successMessage && <p>{successMessage}</p>}
                    </li>
                </ul>
            </div>
        </form>
    );
}