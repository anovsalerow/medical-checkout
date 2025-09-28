import styles from './_aboutPage.module.scss';
import {t} from '../../utils/i18n.js';

export const AboutPage = () => {

    return (
        <h1 className={styles.title}>{t("About Page")}</h1>
    );
}