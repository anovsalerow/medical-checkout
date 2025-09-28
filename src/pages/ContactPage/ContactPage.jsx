import styles from './_contactPage.module.scss';
import {t} from '../../utils/i18n.js';
 
export const ContactPage = () => {

    return (
        <h1 className={styles.title}>{t("Contact Page")}</h1>
    );
}