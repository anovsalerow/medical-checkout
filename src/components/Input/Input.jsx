import styles from './_input.module.scss';

export const Input = ({type, name, placeholder, legend, ...rest}) => {
    
    return (
        <fieldset className={styles.wrapper}>
            <legend>{legend}</legend>
            <input type={type} name={name} placeholder={placeholder} {...rest} />
        </fieldset>
    );
}