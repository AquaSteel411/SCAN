import * as React from "react";
import {Link, useNavigate} from "react-router-dom";
import GoogleSVG from '../Svg/Google.module.svg';
import FacebookSVG from '../Svg/Facebook.module.svg';
import YandexSVG from '../Svg/Yandex.module.svg';
import PadlockSVG from '../Svg/Padlock.module.svg'
import styles from '../Styles/Login.module.scss';
import {useState} from "react";
import axios from "axios";

export default function Login({setLoginUser, setAccessToken, setExpire}) {

    const [inputUsername, setInputUsername] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const navigate = useNavigate()

    const signIn = document.querySelector(`.${styles.signIn}`);
    const signUp = document.querySelector(`.${styles.signUp}`);

    const isActiveSignUp = () => {
        if (!signUp.classList.contains(`${styles.active}`)) {
            signUp.classList.toggle(`${styles.active}`)
            signIn.classList.toggle(`${styles.active}`)
        }
    }

    const isActiveSignIn = () => {
        if (!signIn.classList.contains(`${styles.active}`)) {
            signUp.classList.toggle(`${styles.active}`)
            signIn.classList.toggle(`${styles.active}`)
        }
    }

    const submitHandler = e => {
        e.preventDefault();
        // setLoading(true);
        axios(
            'https://gateway.scan-interfax.ru/api/v1/account/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                data: {
                    login: inputUsername,
                    password: inputPassword,
                }
            })
            .then(response => {
                if (response) {
                    console.log(response)
                    return response
                } else {
                    throw Error(`Something went wrong: code ${response.status}`)
                }
            })
            .then(({data:{accessToken, expire}}) => {
                console.log(accessToken, expire)
                localStorage.setItem('loginUser', inputUsername)
                setLoginUser(inputUsername);
                localStorage.setItem('accessToken', accessToken)
                setAccessToken(accessToken);
                localStorage.setItem('expire', expire)
                setExpire(expire);
            })
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <section className={styles.login}>
            <PadlockSVG className={styles.padlock} />
            <button id='sign-in' className={`${styles.signIn} ${styles.active}`} onClick={isActiveSignIn}>Войти</button>
            <button id='sign-up' className={styles.signUp} onClick={isActiveSignUp}>Зарегистрироваться</button>
            <div className={styles.form}>
                <label className={styles.text}>Логин или номер телефона:</label>
                <input className={styles.username}
                       onChange={e => setInputUsername(e.target.value)}
                       value={inputUsername}
                />
                <label className={styles.text}>Пароль:</label>
                <input className={styles.username}
                       type='password'
                       onChange={e => setInputPassword(e.target.value)}
                       value={inputPassword}
                />
                <button className={styles.enter} onClick={submitHandler}>Войти</button>
            </div>
            <Link className={styles.recover} to='#' >Восстановить пароль</Link>
            <p className={styles.enterVia}>Войти через:</p>
            <p className={styles.services}>
                <Link to='#'><GoogleSVG /></Link>
                <Link to='#'><FacebookSVG /></Link>
                <Link to='#'><YandexSVG /></Link>
            </p>
        </section>

    )
}
