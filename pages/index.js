import React from 'react';
import Teclado from '../components/teclado/Teclado';
import Visor from '../components/visor/Visor';
import Vitals from '../components/vitals/Vitals'
import { TextProvider } from '../components/context/Teclado';
import styles from './Home.module.css';



function Home() {
    return (
        <TextProvider>
            <div className={styles.homeContainer}>
                <Visor />
                <Vitals />
                <Teclado />
            </div>
        </TextProvider>
    )
}

export default Home;