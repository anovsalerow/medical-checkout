import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import {useForm} from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slices/authSlice.js";
import {joiResolver} from '@hookform/resolvers/joi';
import { SignFormValidationSchema } from '../Schemas/SignFormValidationSchema.js';
import { Input } from "../Input/index.js";
import { SubmitButton } from "../SubmitButton/index.js";
import styles from './_signinForm.module.scss';
import {t} from '../../utils/i18n.js';

export const SigninForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, user } = useSelector((state) => state.auth);

    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm({resolver: joiResolver(SignFormValidationSchema), mode: 'onBlur'})


    const handleOnSubmit = (data) => {
        dispatch(loginUser(data));
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
                    {errors.email && <p className={styles.validation_error}>{t(errors.email.message)}</p>}
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
                    {errors.password && <p className={styles.validation_error}>{t(errors.password.message)}</p>}
                </li>
                <li className={styles.block_input__item}>
                    <SubmitButton text={loading ? "Loading..." : "Login"}/>
                    {error && <p className={styles.validation_error}>{t(error)}</p>}
                </li>
            </ul>
        </form>
    );
};
