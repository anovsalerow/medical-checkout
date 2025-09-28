import styles from './_inputPromo.module.scss';
import {t} from '../../utils/i18n.js';

export const InputPromo = ({onClick, ...rest}) => {
    return (
        <div className={styles.container}>
            <input {...rest} className={styles.input} type="text" placeholder={t("Promotion or Discount code")} />
            <button className={styles.button}  onClick={onClick}>{t("Apply Code")}</button>
        </div>
    );
}