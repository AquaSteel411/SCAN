import * as React from "react";
import {Link} from "react-router-dom";
import GoogleSVG from '../Svg/Google.module.svg';
import FacebookSVG from '../Svg/Facebook.module.svg';
import YandexSVG from '../Svg/Yandex.module.svg';
import PadlockSVG from '../Svg/Padlock.module.svg'
import styles from '../Styles/Login.module.scss';
import {useState} from "react";
import axios from "axios";
import {connect} from "react-redux";

function Login(props) {

    interface User {
        token: string,
        date: string
    }
    let [inputUsername, setInputUsername] = useState('')
    let [inputPassword, setInputPassword] = useState('')
    let [loginUser, setLoginUser] = useState<User>()

    const URL = 'https://gateway.scan-interfax.ru/api/v1/account/login';

    const isActive = () => {
        let signIn = $('#sign-in')[0];
        let signUp = $('#sign-up')[0];
        if (!signUp.classList.contains('CfA52Q2h1Wnk9ptB1osD')) {
            signUp.classList.add('CfA52Q2h1Wnk9ptB1osD')
            signIn.classList.remove('CfA52Q2h1Wnk9ptB1osD')
        } else {
            signIn.classList.add('CfA52Q2h1Wnk9ptB1osD')
            signUp.classList.remove('CfA52Q2h1Wnk9ptB1osD')
        }
    }

    const handleInputUsername = e => {
        const username = e.target.value;
        console.log(username)
        setInputUsername(username);
    }

    const handleInputPassword = e => {
        const password = e.target.value;
        console.log(password);
        setInputPassword(password);
    }

    const auth = (login, password) => {
        axios.post(URL, {login, password}).then(res => {
            setLoginUser({token: res.data.accessToken, date: res.data.expire})
        }).then(() => {
            props.addElement(loginUser.token , loginUser.date)
        })
    }


    return (
        <section className={styles.login}>
            <PadlockSVG className={styles.padlock} />
            <button id='sign-in' className={`${styles.signIn} ${styles.active}`} onClick={isActive}>Войти</button>
            <button id='sign-up' className={styles.signUp} onClick={isActive}>Зарегистрироваться</button>
            <div className={styles.form}>
                <label className={styles.text}>Логин или номер телефона:</label>
                <input className={styles.username}
                       onChange={e => handleInputUsername(e)}
                       value={inputUsername}
                />
                {/*// pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$'*/}
                {/*pattern='[789][0-9]{10}'*/}
                <label className={styles.text}>Пароль:</label>
                <input className={styles.username}
                       type='password'
                       onChange={e => handleInputPassword(e)}
                       value={inputPassword}
                />
                <button className={styles.enter} onClick={() => auth(inputUsername, inputPassword)}>Войти</button>
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

export default connect(
    state => ({
        state
    }),
    dispatch => ({
        addElement: (token, date) => {
            dispatch({type: 'ADD_TOKEN', payload: {token: token, date: date}})
        }
    })
)(Login);