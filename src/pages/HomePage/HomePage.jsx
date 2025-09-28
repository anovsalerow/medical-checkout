import styles from './_homePage.module.scss';
import {t} from '../../utils/i18n.js';

export const HomePage = () => {

    return (
        <h1 className={styles.title}>{t("Home Page")}</h1>
    );
}