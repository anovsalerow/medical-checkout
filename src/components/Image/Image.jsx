export const Image = ({src, altText, styles, ...rest}) => {
    return (
        <img className={styles} src={src} alt={altText} {...rest} />
    );
}