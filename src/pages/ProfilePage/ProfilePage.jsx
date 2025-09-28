import styles from './_profilePage.module.scss';
import {t} from '../../utils/i18n.js';

export const ProfilePage = () => {

    return (
        <h1 className={styles.title}>{t("Profile Page")}</h1>
    );
}