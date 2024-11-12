import { ButtonProps } from '@/types/types';
import styles from './Button.module.css';

function Button({ label, variant = 'secondary', onClick }: ButtonProps): JSX.Element {
  return (
    <button className={`${styles.btn} ${styles[`btn--${variant}`]}`} onClick={onClick}>{label}</button>
  );
}

export default Button;