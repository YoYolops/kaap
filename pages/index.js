import { TextProvider } from '../components/context/Teclado';
import HomeBox from '../components/homeBox/HomeBox';
import styles from './Home.module.css';


function Home() {
    return (
        <TextProvider>
            <style jsx global>
                {`
                    * {
                        box-sizing: border-box;
                    }

                    body {
                        margin: 0;
                        background-color: #4aacb3;
                    }
                `}
            </style>

            <HomeBox>
                
            </HomeBox>
        </TextProvider>
    )
}

export default Home;