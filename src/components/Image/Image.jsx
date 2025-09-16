export const Image = ({src, altText, styles}) => {
    return (
        <img className={styles} src={src} alt={altText} />
    );
}