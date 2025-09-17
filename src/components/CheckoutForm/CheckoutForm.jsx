import {useForm} from 'react-hook-form';
import Joi from 'joi';
import {joiResolver} from '@hookform/resolvers/joi';
import {Input} from '../Input';
import {InputRadio} from '../InputRadio';
import {InputPromo} from '../InputPromo';
import { CheckoutTotal } from '../CheckoutTotal';
import {OrderSummary} from '../OrderSummary';
import {SubmitButton} from '../SubmitButton';
import {ORDER_SUMMARY, CHECKOUT_TOTAL} from '../../constants';
import styles from './_checkoutForm.module.scss';

const schema = Joi.object({
    fullName: Joi.string().min(3).max(100).required().label('Full Name'),
    email: Joi.string().email({tlds: {allow: false}}).required().label('Email'),
    phoneNumber: Joi.string().pattern(/^\+?[0-9\s\-()]{7,20}$/).required().label('Phone number'),
    address: Joi.string().min(5).max(200).required().label('Street Address'),
    city: Joi.string().min(2).max(100).required().label('City'),
    zipCode: Joi.string().pattern(/^[0-9]{4,10}$/).required().label('Zip Code'),
    сountry: Joi.string().min(5).max(100).required().label('Country'),
    promoCode: Joi.string().alphanum().min(5).max(20).optional().label('Promotion and Discount code')
});

const handleOnSubmit = (data) => {console.log(data)};

export const CheckoutForm = () => {
    const {
        register, 
        handleSubmit, 
        formState: {errors, isValid}
    } = useForm({resolver: joiResolver(schema), mode: 'onBlur'})

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
                        <OrderSummary data={ORDER_SUMMARY} />
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
                        <CheckoutTotal data={CHECKOUT_TOTAL} />
                    </li>
                    <li className={styles.block_order__item}>
                        <SubmitButton disabled={!isValid} text="Checkout"/>
                    </li>
                </ul>
            </div>
        </form>
    );
}