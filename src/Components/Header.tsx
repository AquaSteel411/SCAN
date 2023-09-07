import * as React from "react";
import {Link} from "react-router-dom";
import HeaderScanSVG from '../Svg/Header-scan-1.module.svg'
import Line from '../Svg/Header-line.module.svg'
import style from '../Styles/Header.module.scss'


function Header() {

    return (
        <>
            <header className={style.header}>
                <HeaderScanSVG />
                <nav className={style.nav}>
                    <Link to='/'>Главная</Link>
                    <Link to='#'>Тарифы</Link>
                    <Link to='#'>FAQ</Link>
                </nav>
                <section className={style.auth}>
                    <Link className={style.signUp} to='/login'>Зарегистрироваться</Link>
                    <Line />
                    <Link className={style.signIn} to='/login'>Войти</Link>
                </section>
            </header>


        </>


    )
}

export default Header;