import { TextProvider } from '../components/context/Teclado';
import HomeBox from '../components/homeBox/HomeBox';
import Image from 'next/image'
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
                <Image
                    src="/images/katia.jpeg"
                    alt="Picture of the author"
                    width={1280}
                    height={720}
                />
            </HomeBox>
        </TextProvider>
    )
}

export default Home;