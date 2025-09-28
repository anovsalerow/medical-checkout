import { SigninForm } from "../../components/SigninForm";
import styles from './_loginPage.module.scss';
import {t} from '../../utils/i18n.js';

export const LoginPage = () => {

    return (
        <>
            <h1 className={styles.title}>{t("Log in")}</h1>
            <SigninForm />
        </>
    );
}
