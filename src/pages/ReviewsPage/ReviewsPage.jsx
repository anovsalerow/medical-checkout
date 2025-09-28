import styles from './_reviewsPage.module.scss';
import {t} from '../../utils/i18n.js';

export const ReviewsPage = () => {

    return (
        <h1 className={styles.title}>{t("Reviews Page")}</h1>
    );
}