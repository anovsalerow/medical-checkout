import { Outlet } from "react-router-dom";

import styles from "./_main_module.scss";

export const Main = () => {
    return (
        <main className={styles.main}>
            <Outlet />
        </main>
    );
}