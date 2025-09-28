import styles from './_submitButton.module.scss';
import {t} from '../../utils/i18n.js';

export const SubmitButton = ({
    type = 'submit',
    text = 'SubmitButton',
    disabled = false
}) => {
    return (
        <button className={styles.submit_btn} type={type} disabled={disabled}>
            {t(text)}
        </button>
    );
}