import { SigninForm } from "../../components/SigninForm";
import styles from './_loginPage.module.scss';

export const LoginPage = () => {

    return (
        <>
            <h1 className={styles.title}>Log in</h1>
            <SigninForm />
        </>
    );
}
