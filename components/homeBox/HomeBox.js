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

                </div>

                <div className={styles.bottomFoot}>

                </div>
            </footer>
        </div>
    )
}

export default HomeBox;