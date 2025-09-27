import {useForm} from 'react-hook-form';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchCart, removeFromCart, checkoutCart} from '../../store/slices/cartSlice.js';
import {joiResolver} from '@hookform/resolvers/joi';
import {Input} from '../Input';
import {InputRadio} from '../InputRadio';
import {InputPromo} from '../InputPromo';
import { CheckoutTotal } from '../CheckoutTotal';
import {OrderSummary} from '../OrderSummary';
import {SubmitButton} from '../SubmitButton';
import { CheckoutFormValidationSchema } from '../Schemas/CheckoutFormValidationSchema.js';
import styles from './_checkoutForm.module.scss';


const handleOnSubmit = (data) => {console.log(data)};

export const CheckoutForm = () => {
    const { items, loading, successMessage } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm({resolver: joiResolver(CheckoutFormValidationSchema), mode: 'onBlur'});

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    const handleRemoveItem = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const handleCheckout = () => {
        dispatch(checkoutCart());
    };

    if (loading) return <p styles={styles.loading}>Loading</p>

    return (
        <form className={styles.form} onSubmit={handleSubmit(handleOnSubmit)}>
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
                            {...register('сountry')} 
                            type='address' 
                            name='сountry' 
                            placeholder='Country' 
                            legend='Country' 
                        />
                        {errors.сountry && <p className={styles.validation_error}>{errors.сountry.message}</p>}
                    </li>
                </ul>
                <ul className={styles.block_radio__list}>
                    <li className={styles.block_radio__subtitle}>
                        <h2>Shipping Methode</h2>
                    </li>
                    <li className={styles.block_radio__item}>
                        <InputRadio name='shippingMethod' label='Odeon Express' value='Odeon Express' />
                    </li>
                    <li className={styles.block_radio__item}>
                        <InputRadio name='shippingMethod' label='Gorgom Express' value='Gorgom Express' />
                    </li>
                    <li className={styles.block_radio__item}>
                        <InputRadio name='shippingMethod' label='Cipay Jet' value='Cipay Jet' />
                    </li>
                    <li className={styles.block_radio__item}>
                        <InputRadio name='shippingMethod' label='Eunioa Fast' value='Eunioa Fast' />
                    </li>
                </ul>
                <ul className={styles.block_radio__list}>
                    <li className={styles.block_radio__title}>
                        <h2>Payment Methode</h2>
                    </li>
                    <li className={styles.block_radio__item}>
                        <InputRadio name='paymentMethod' label='Credit Card' value='Credit Card' />
                    </li>
                    <li className={styles.block_radio__item}>
                        <InputRadio name='paymentMethod' label='Paypal' value='Paypal' />
                    </li>
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
                        <SubmitButton text="Checkout"/>
                        {successMessage && <p>{successMessage}</p>}
                    </li>
                </ul>
            </div>
        </form>
    );
}