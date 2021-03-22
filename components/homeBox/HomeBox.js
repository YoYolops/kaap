import styles from './HomeBox.module.css';
import { useState } from 'react';
import Image from 'next/image';
import NameGame from '../nameGame';

function HomeBox(props) {
    const [ videoAulasVisible, setVideoAulasVisible ] = useState(false);
    const [ atividadesVisible, setAtividadesVisible ] = useState(false);
    const [ jogosVisible, setJogosVisible ] = useState(false);


    function suite(ativado) {
        if(ativado === 'videoAulasVisible') {
            setVideoAulasVisible(true)
            setAtividadesVisible(false)
            setJogosVisible(false)
        }
        else if (ativado === 'atividadesVisible') {
            setVideoAulasVisible(false)
            setAtividadesVisible(true)
            setJogosVisible(false)
        } else {
            setVideoAulasVisible(false)
            setAtividadesVisible(false)
            setJogosVisible(true)
        }
    }

    return (
        <div className={styles.homeBoxContainer}>
            <header>
                Portal da Tia Kátia
            </header>

            <div className={styles.vitrine}>
                <div className={styles.screen}>
                    <div className={!videoAulasVisible && !atividadesVisible && !jogosVisible ? styles.active : styles.unactive}>
                        <Image
                            src="/images/katia.jpeg"
                            alt="Picture of the author"
                            width={1280}
                            height={720}
                        />
                    </div>
                    <div className={videoAulasVisible ? styles.active : styles.unactive}>
                        NENHUMA VÍDEO-AULA AINDA
                    </div>
                    <div className={atividadesVisible ? styles.active : styles.unactive}>
                        NENHUMA ATIVIDADE AINDA
                    </div>
                    <div className={jogosVisible ? styles.active : styles.unactive}>
                        <NameGame />
                    </div>  
                </div>

                <div className={styles.panelButton}>
                    <button onClick={() => {suite('atividadesVisible')}}>Atividades</button>
                    <button onClick={() => {suite('videoAulasVisible')}}>Videoaulas</button>
                    <button onClick={() => {suite('jogosVisible')}}>Jogos</button>
                </div>
            </div>

            <footer>
                <div className={styles.topFoot}>
                    <p>
                    Profª. Kátia Macêdo DuartePedagoga - UFCG;<br />
                    Especialista em: Psicopedagogia - FASP;<br />
                    Educação em Direitos Humanos - UFPB;<br />
                    Politica de Igualdade Racial na Escola - UFRPE;<br />
                    Mestre em Ensino - UERN<br />
                    </p>
                </div> 

                <div className={styles.bottomFoot}>
                    <p>
                        Professora da rede Municipal de Patos-PB<br />
                        Área de atuação: Educação Infantil e Ensino Fundamental<br />
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default HomeBox;