
import React, { useState, useContext, useEffect } from 'react';
import styles from './Botao.module.css';
import TextContext from '../context/Teclado';

function Botao (props) {
    const [colorized, setColorized] = useState(false)
    const { changeText, allCleaned } = useContext(TextContext)

    useEffect(() => {
        setColorized(false)
    }, [allCleaned])

    function handleClick(){
        setColorized(true)
        changeText(props.val)
    }

    return (
        <button onClick={handleClick} className={colorized ? styles.activeBtn : styles.unactiveBtn}>
            {props.exibir}
        </button>
    )
}

export default Botao;