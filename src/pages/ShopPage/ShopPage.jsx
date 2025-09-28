import styles from './_shopPage.module.scss';
import {t} from '../../utils/i18n.js';

export const ShopPage = () => {

    return (
        <h1 className={styles.title}>{t("Shop Page")}</h1>
    );
}