import styles from './_inputPromo.module.scss';

export const InputPromo = ({onClick}) => {
    return (
        <div className={styles.container}>
            <input className={styles.input} type="text" placeholder="Promotion or Discount code" />
            <button className={styles.button}  onClick={onClick}>Apply Code</button>
        </div>
    );
}