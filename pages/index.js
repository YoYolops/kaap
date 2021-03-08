import { TextProvider } from '../components/context/Teclado';
import HomeBox from '../components/homeBox/HomeBox';
import styles from './Home.module.css';


function Home() {
    return (
        <TextProvider>
            <HomeBox>
                
            </HomeBox>
        </TextProvider>
    )
}

export default Home;