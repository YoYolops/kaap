import Botao from '../botao/Botao';
import styles from './Teclado.module.css';

function Teclado() {
    return (
        <div className={styles.tecladoContainer}>
            <Botao exibir='A' val="a" cor='#fe2e3d' />
            <Botao exibir='B' val="b" cor='#357534' />
            <Botao exibir='C' val="c" cor='#e4d38e' />
            <Botao exibir='D' val="d" cor='#d8f2f0' />
            <Botao exibir='E' val="e" cor='#fa44a2' />
            <Botao exibir='F' val="f" cor='#65d1cd' />
            <Botao exibir='G' val="g" cor='#ff9d83' />
            <Botao exibir='H' val="h" cor='#79d7da' />
            <Botao exibir='I' val="i" cor='#ffeb3d' />
            <Botao exibir='J' val="j" cor='#ffd4c5' />
            <Botao exibir='K' val="k" cor='#fff28b' />
            <Botao exibir='L' val="l" cor='#fffad8' />
            <Botao exibir='M' val="m" cor='#d2e38c' />
            <Botao exibir='N' val="n" cor='#caebd7' />
            <Botao exibir='O' val="o" cor='#ffc734' />
            <Botao exibir='P' val="p" cor='#da6936' />
            <Botao exibir='Q' val="q" cor='#ffd4c5' />
            <Botao exibir='R' val="r" cor='#ff2e4b' />
            <Botao exibir='S' val="s" cor='#53a677' />
            <Botao exibir='T' val="t" cor='#caebd7' />
            <Botao exibir='U' val="u" cor='#ffadb2' />
            <Botao exibir='V' val="v" cor='#ebecec' />
            <Botao exibir='W' val="w" cor='#8ce1f9' />
            <Botao exibir='X' val="x" cor='#568ec9' />
            <Botao exibir='Y' val="y" cor='#4aacb3' />
            <Botao exibir='Z' val="z" cor='#fff28b' />
        </div>
    )
}

export default Teclado