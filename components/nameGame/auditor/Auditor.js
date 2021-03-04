import styles from './Auditor.module.css';
import { useContext, useState } from 'react';
import TextContext from '../../../components/context/Teclado';
import sucessAudio from '../../../assets/sucess.mp3';
import defeatAudio from '../../../assets/defeat.mp3';

function Auditor() {
    const { nomesTarde, typedText } = useContext(TextContext);
    const [ tipo, setTipo ] = useState(styles.padrao);

    function verifyName(text) {
        const victory = new Audio(sucessAudio)
        const defeat = new Audio(defeatAudio)
        
        if (nomesTarde.includes(text.trim())) {
            victory.play()
            setTipo(styles.certo)
        } else {
            defeat.play()
            setTipo(styles.errado)
        }
    }

    return (
        <button onClick={() => {verifyName(typedText.toLowerCase())}}
        id={tipo}
        className={styles.geral}>
            Enviar
        </button>
    )
};

export default Auditor;