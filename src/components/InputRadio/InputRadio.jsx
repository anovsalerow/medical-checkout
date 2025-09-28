import styles from './_inputRadio.module.scss';
import {t} from '../../utils/i18n.js';

export const InputRadio = ({name, label, value, ...rest}) => {
    return (
        <label htmlFor={label} className={styles.wrapper}>
            <span className={styles.rectangle} />
            <span className={styles.text}>{t(label)}</span>
            <input type='radio' id={label} name={name} value={value} {...rest} />
        </label>
    );
}