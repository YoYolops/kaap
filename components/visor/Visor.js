import { useContext } from 'react';
import TextContext from '../context/Teclado';
import styles from './Visor.module.css';

function Visor() {
    const { typedText } = useContext(TextContext);

    return(
        <div className={styles.visor}>
            <p className={styles.textBox}>
                {typedText}
            </p>
        </div>
    )
};

export default Visor;