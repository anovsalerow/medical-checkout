import { ADVANTAGES } from '../../constants';
import { Image } from '../Image';
import styles from './_advantages.module.scss';
import {t} from '../../utils/i18n.js';

const getAdvantages = (arr) => {
    return arr.map(({ title, text, icon }, index) => (
        <li key={index} className={styles.item}>
            <div className={styles.image_background}>
                <Image styles={styles.adventure_image} src={icon} alt={t(text)} />
            </div>
            <div className={styles.text_container}>
                <span className={styles.title}>{t(title)}</span>
                <span className={styles.description}>{t(text)}</span>
            </div>
        </li>
    ));
};

export const Advantsges = () => {
    return (
        <section className={styles.advantages}>
            <ul className={styles.list}>
                {getAdvantages(ADVANTAGES)}
            </ul>
        </section>
    );
}