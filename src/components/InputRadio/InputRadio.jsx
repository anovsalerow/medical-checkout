import styles from './_inputRadio.module.scss';

export const InputRadio = ({name, label, value}) => {
    return (
        <label htmlFor={label} className={styles.wrapper}>
            <span className={styles.rectangle} />
            <span className={styles.text}>{label}</span>
            <input type='radio' id={label} name={name} value={value} />
        </label>
    );
}