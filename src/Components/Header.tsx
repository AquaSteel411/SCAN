import * as React from "react";
import {Link} from "react-router-dom";
import HeaderScanSVG from '../Svg/Header-scan-1.module.svg';
import HeaderScanSmallSVG from  '../Svg/HeaderScanSmall.module.svg';
import SpinnerSVG from '../Svg/Spinner.module.svg';
import Line from '../Svg/Header-line.module.svg';
import styles from '../Styles/Header.module.scss';
import photo from '../Assets/photo.jpeg';
import ThreeLineSVG from '../Svg/ThreeLine.module.svg';
import {useEffect, useState} from "react";
import axios from "axios";


function Header({username, setAccessToken, setLoginUser, setExpire, accessToken}) {

    const [usedCompany, setUsedCompany] = useState('')
    const [userLimit, setUserLimit] = useState('')

    const logout = () => {
        localStorage.clear();
        setAccessToken('');
        setLoginUser('');
        setExpire('');
    }

    useEffect(() => {
        if (username) {
            axios(
                'https://gateway.scan-interfax.ru/api/v1/account/info',
                {
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': `Bearer ${accessToken}`,
                    },
                })
                .then(response => {
                    if (response) {
                        return response.data.eventFiltersInfo
                    } else {
                        if (response.status === 401) {
                            throw Error('refresh')
                        }
                        throw Error(`Something went wrong: code ${response.status}`)
                    }
                })
                .then(data => {
                    setUsedCompany(data.usedCompanyCount)
                    setUserLimit(data.companyLimit)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [usedCompany, userLimit, accessToken, username])

    const usr = document.querySelector(`.${styles.sectionUsername}`)
    const nav = document.querySelector(`.${styles.nav}`)
    const menuHandler = () => {
        usr.classList.toggle(styles.sectionUsernameFlex)
        nav.classList.toggle(styles.navGrid)
    }

    const menuBar = document.querySelector(`.${styles.svgThreeLine}`)


    useEffect(() => {
        if ((window.screen.width < 800) && (username)) {
            window.addEventListener('scroll', () => {
                if (document.querySelector(`.${styles.sectionUsername}`).classList.contains(`${styles.sectionUsernameFlex}`)) {
                    document.querySelector(`.${styles.sectionUsername}`).classList.toggle(styles.sectionUsernameFlex)
                    document.querySelector(`.${styles.nav}`).classList.toggle(styles.navGrid)
                }
            })
        }

    },[])


    return (
        <>
            <header className={styles.header}>
                {(window.screen.width < 450)?
                    <HeaderScanSmallSVG />
                    :
                    <HeaderScanSVG />
                }

                <nav className={styles.nav}>
                    <Link to='/'>Главная</Link>
                    <Link to='#'>Тарифы</Link>
                    <Link to='#'>FAQ</Link>
                </nav>
                {!username?
                    <section className={styles.auth}>
                        <Link className={styles.signUp} to='/login'>Зарегистрироваться</Link>
                        <Line />
                        <Link className={styles.signIn} to='/login'>Войти</Link>
                    </section>
                    :
                    <section className={styles.afterAuth}>
                        <section className={styles.infoUser}>
                            {(userLimit === '')?
                                <SpinnerSVG className={styles.spinner} />
                                :
                                <>
                                    <p className={styles.pUsed}>Использованно компаний</p>
                                    <span className={styles.usedCompany}>{usedCompany}</span>
                                    <p className={styles.pLimit}>Лимит по компаниям</p>
                                    <span className={styles.userLimit}>{userLimit}</span>
                                </>
                            }


                        </section>
                        <ThreeLineSVG className={styles.svgThreeLine} onClick={menuHandler}/>
                        <section className={styles.sectionUsername}>
                            <p className={styles.username}>{username}</p>
                            <button className={styles.btnLogout} onClick={logout}>Выйти</button>
                            <figure className={styles.container}>
                                <img className={styles.photo} src={photo}/>
                            </figure>
                        </section>
                    </section>
                }

            </header>


        </>


    )
}

export default Header;