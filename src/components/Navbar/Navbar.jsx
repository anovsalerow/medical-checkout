import { useState } from 'react';
import { Link } from 'react-router-dom';

import {NAVBAR_LINKS, LINKS, ICON_LINKS} from '../../constants';
import styles from './_navbar.module.scss';


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

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
                    <button
                        className={styles.hamburger}
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
}