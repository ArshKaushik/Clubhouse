import styles from './Button.module.css';

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <span>{text}</span>
            <img className={styles.arrow} width='20' src="/svgs/arrow-forward.svg" alt="arrow"/>
        </button>
    );
};
export default Button;
