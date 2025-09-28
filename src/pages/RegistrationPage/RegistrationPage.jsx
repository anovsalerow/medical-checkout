import { SignupForm } from "../../components/SignupForm";
import {t} from '../../utils/i18n.js';
import styles from './_registrationPage.module.scss';

export const RegistrationPage = () => {

    return (
        <>
            <h1 className={styles.title}>{t("Registration")}</h1>
            <SignupForm />
        </>
    );
}
