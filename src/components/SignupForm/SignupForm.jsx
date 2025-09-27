import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import {useForm} from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { registrationUser } from "../../store/slices/authSlice.js";
import {addDemoProducts} from "../../store/slices/cartSlice.js";
import {joiResolver} from '@hookform/resolvers/joi';
import { SignFormValidationSchema } from '../Schemas/SignFormValidationSchema.js';
import { Input } from "../Input/index.js";
import { SubmitButton } from "../SubmitButton/index.js";
import styles from './_signupForm.module.scss';

export const SignupForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, user } = useSelector((state) => state.auth);

    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm({resolver: joiResolver(SignFormValidationSchema), mode: 'onBlur'})


    const handleOnSubmit = (data) => {
        dispatch(registrationUser(data));
    };

    useEffect(() => {
        if (user) {
        navigate("/checkout");
        }
    }, [user, navigate]);

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)} className={styles.form}>
            <ul className={styles.block_input__list}>
                <li className={styles.block_input__item}>
                    <Input 
                        {...register('email')} 
                        type='email' 
                        name='email' 
                        placeholder='Email Address' 
                        legend='Email Address'
                        autoComplete="email" 
                    />
                    {errors.email && <p className={styles.validation_error}>{errors.email.message}</p>}
                </li>
                <li className={styles.block_input__item}>
                    <Input 
                        {...register('password')} 
                        type='password' 
                        name='password' 
                        placeholder='Password' 
                        legend='Password'
                        autoComplete="current-password"
                    />
                    {errors.password && <p className={styles.validation_error}>{errors.password.message}</p>}
                </li>
                <li className={styles.block_input__item}>
                    <SubmitButton text={loading ? "Loading..." : "Registration"}/>
                    {error && <p className={styles.validation_error}>{error}</p>}
                </li>
            </ul>
        </form>
    );
};
