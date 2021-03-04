import { TextProvider } from '../components/context/Teclado';
import styles from './Home.module.css';



function Home() {
    return (
        <TextProvider>
            <div className={styles.homeContainer}>
                Hello World
            </div>
        </TextProvider>
    )
}

export default Home;