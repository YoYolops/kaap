import { TextProvider } from '../context/Teclado'
import Teclado from './teclado/Teclado';
import Visor from './visor/Visor';
import Vitals from './vitals/Vitals';
import Auditor from './auditor/Auditor'
import styles from './NameGame.module.css';



function NameGame() {
    return (
        <TextProvider>
            <div className={styles.nameGameContainer}>
                <Visor />
                <Vitals />
                <Teclado />
                <Auditor />
            </div>
        </TextProvider>
    )
}

export default NameGame;