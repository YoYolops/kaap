import Botao from '../botao/Botao';
import styles from './Teclado.module.css';

function Teclado() {
    return (
        <div className={styles.tecladoContainer}>
            <Botao exibir='Aa' val="a"/>
            <Botao exibir='Bb' val="b"/>
            <Botao exibir='Cc' val="c"/>
            <Botao exibir='Dd' val="d"/>
            <Botao exibir='Ee' val="e"/>
            <Botao exibir='Ff' val="f"/>
            <Botao exibir='Gg' val="g"/>
            <Botao exibir='Hh' val="h"/>
            <Botao exibir='Ii' val="i"/>
            <Botao exibir='Jj' val="j"/>
            <Botao exibir='Kk' val="k"/>
            <Botao exibir='Ll' val="l"/>
            <Botao exibir='Mm' val="m"/>
            <Botao exibir='Nn' val="n"/>
            <Botao exibir='Oo' val="o"/>
            <Botao exibir='Pp' val="p"/>
            <Botao exibir='Qq' val="q"/>
            <Botao exibir='Rr' val="r"/>
            <Botao exibir='Ss' val="s"/>
            <Botao exibir='Tt' val="t"/>
            <Botao exibir='Uu' val="u"/>
            <Botao exibir='Vv' val="v"/>
            <Botao exibir='Ww' val="w"/>
            <Botao exibir='Xx' val="x"/>
            <Botao exibir='Yy' val="y"/>
            <Botao exibir='Zz' val="z"/>
        </div>
    )
}

export default Teclado