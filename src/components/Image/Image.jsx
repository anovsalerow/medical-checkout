import {t} from '../../utils/i18n.js';

export const Image = ({src, altText, styles, ...rest}) => {
    return (
        <img className={styles} src={src} alt={t(altText)} {...rest} />
    );
}