import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Image } from '../Image';
import {NAVBAR_LINKS, LINKS, ICON_LINKS} from '../../constants';
import styles from './_navbar.module.scss';
import hamburgerIcon from '../../assets/svg/burger-menu.svg';


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
                <button
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    <Image styles={styles.hamburger} src={hamburgerIcon} altText="Menu"/>
                </button>
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
                    <ul className={styles.icon_links}>
                        {ICON_LINKS.map(({ name, icon, path }, index) => (
                            <li key={index}>
                                <a href={path}>
                                    <img src={icon} alt={`${name} logo`} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}