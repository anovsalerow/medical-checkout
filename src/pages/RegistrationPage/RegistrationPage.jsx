import { SignupForm } from "../../components/SignupForm";
import styles from './_registrationPage.module.scss';

export const RegistrationPage = () => {

    return (
        <>
            <h1 className={styles.title}>Registration</h1>
            <SignupForm />
        </>
    );
}
