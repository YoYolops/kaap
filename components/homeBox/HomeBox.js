import styles from './HomeBox.module.css';

function HomeBox(props) {
    return (
        <div className={styles.homeBoxContainer}>
            <header>
                Portal da Tia Kátia
            </header>

            <div className={styles.vitrine}>
                <div className={styles.screen}>
                    {props.children}
                </div>

                <div className={styles.panelButton}>
                    <button>Atividades</button>
                    <button>Videoaulas</button>
                    <button>Jogos</button>
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