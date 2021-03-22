import styles from './Vitals.module.css'
import TextContext from '../../context/Teclado';
import { useContext } from 'react';
import { FaBackspace } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiSpaceBar } from 'react-icons/bi';

function Vitals() {
    const { clearAll, changeText, deletar } = useContext(TextContext);

    return (
        <div className={styles.vitalButtons}>
            <button onClick={clearAll} className={styles.vitalBTN}>
                <AiOutlineDelete
                    size='25px'
                    color='#191919'
                />
            </button>
            <button onClick={() => {changeText(' ')}} className={styles.vitalBTNspace}>
                <BiSpaceBar
                        size='25px'
                        color='#191919'
                />
            </button>
            <button onClick={deletar} className={styles.vitalBTN}>
                    <FaBackspace
                        size='25px'
                        color='#191919'
                    />
            </button>
        </div>
    )
}

export default Vitals;