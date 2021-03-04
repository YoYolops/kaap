import { TextProvider } from '../../components/context/Teclado'
import Teclado from '../../components/nameGame/teclado/Teclado';
import Visor from '../../components/nameGame/visor/Visor';
import Vitals from '../../components/nameGame/vitals/Vitals';
import Auditor from '../../components/nameGame/auditor/Auditor'
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