import styles from './_submitButton.module.scss';

export const SubmitButton = ({
    type = 'submit',
    text = 'SubmitButton',
    disabled = false
}) => {
    return (
        <button className={styles.submit_btn} type={type} disabled={disabled}>
            {text}
        </button>
    );
}