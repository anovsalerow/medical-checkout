import {Link} from 'react-router-dom';
import { ABOUT_US, SHOPDOC, FAQ, BLOG, SOCIAL_LIST } from "../../constants";
import { ListElement } from "../ListElement";
import styles from "./_footer.module.scss";
import {t} from '../../utils/i18n.js';

const getListOfLinks = (obj) => {
    return Object.entries(obj).map(([text, path], index) => (
        <ListElement styles={styles.item} key={index}>
            <Link to={path}>{t(text)}</Link>
        </ListElement>
    ));
};

const getListOfSocial = (arr) => {
    return arr.map(({name, logo, path}, index) => (
        <li key={index}>
            <Link to={path}>
                <img src={logo} alt={t(`${name} logo`)}/>
            </Link>
        </li>
    ));
};

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    <li className={styles.title}><span>{t("Shopdoc")}</span></li>
                    {getListOfLinks(SHOPDOC)}
                </ul>
                <ul className={styles.list}>
                    <ListElement styles={styles.title}><span>{t("About Us")}</span></ListElement>
                    {getListOfLinks(ABOUT_US)}
                </ul>
                <ul className={styles.list}>
                    <li className={styles.title}><span>{t("FAQ")}</span></li>
                    {getListOfLinks(FAQ)}
                </ul>
                <ul className={styles.list}>
                    <li className={styles.title}><span>{t("BLOG")}</span></li>
                    {getListOfLinks(BLOG)}
                </ul>
                <ul className={styles.list}>
                    <li className={styles.title}><span>{t("Contact us")}</span></li>
                    <li className={styles.item}><span>{t("Get in touch is easy")}</span></li>
                    <li className={styles.item}><span>{t("Follow us")}</span></li>
                    <li className={styles.item}>
                        <ul className={styles.social_list}>
                            {getListOfSocial(SOCIAL_LIST)}
                        </ul>
                    </li>
                </ul>
            </div>
            <span className={styles.copyright}>{t("Copyrights © 2021 Shopdoc. All Rights Reserved.")}</span>
        </footer>
    )
}