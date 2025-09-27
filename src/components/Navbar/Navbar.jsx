import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/slices/authSlice.js";

import {NAVBAR_LINKS, LINKS, ICON_LINKS, SIGN_LINKS} from '../../constants';
import styles from './_navbar.module.scss';


export const Navbar = () => {
    const { user, loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    if (loading) return null;
    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.wrapper}>
                <Link to={LINKS.homepage} className={`${styles.logo} `}>
                    Shopdoc
                </Link>
                <div className={`${styles.nav_content} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.nav_links}>
                        {NAVBAR_LINKS.map(({ text, path }, index) => (
                        <li key={index}>
                            <Link to={path} onClick={() => setIsMenuOpen(false)}>
                                {text}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.icon_container}>
                    {!user ? (
                    <>
                        <Link to={SIGN_LINKS.signin.path} className={styles.icon_sign}>
                            <img src={SIGN_LINKS.signin.icon} alt={`${SIGN_LINKS.signin.name}`} />
                        </Link>
                        <Link to={SIGN_LINKS.signup.path} className={styles.icon_sign}>
                            <img src={SIGN_LINKS.signup.icon} alt={`${SIGN_LINKS.signup.name}`} />
                        </Link>
                    </>
                    ) : (
                    <>
                        <ul className={styles.icon_links}>
                            {ICON_LINKS.map(({ name, icon, path, redMark }, index) => (
                                <li key={index}>
                                    <Link to={path} className={redMark ? styles.red_mark : ''}>
                                        <img src={icon} alt={`${name} logo`} />
                                        {redMark && <span />}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link to={SIGN_LINKS.signout.path} className={styles.icon_sign} onClick={handleLogout}>
                            <img src={SIGN_LINKS.signout.icon} alt={`${SIGN_LINKS.signout.name}`} />
                        </Link>
                        <button
                            className={styles.hamburger}
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            ☰
                        </button>
                    </>
                    )}
                </div>
            </div>
        </nav>
    );
}