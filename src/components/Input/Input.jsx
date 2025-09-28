import styles from './_input.module.scss';
import {t} from '../../utils/i18n.js';

export const Input = ({type, name, placeholder, legend, ...rest}) => {
    
    return (
        <fieldset className={styles.wrapper}>
            <legend>{t(legend)}</legend>
            <input type={type} name={name} placeholder={t(placeholder)} {...rest} />
        </fieldset>
    );
}