import * as React from "react";
import CharactersSVG from '../Svg/Characters.module.svg'
import MobileLoginSVG from '../Svg/MobileLoginSVG.module.svg';
import styles from '../Styles/Authorization.module.scss'
import Login from "./Login";



function Authorization({setLoginUser, setAccessToken, setExpire}) {

    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Для оформления подписки<br/>на тариф, необходимо авторизоваться.</h1>
            <Login setLoginUser={setLoginUser} setAccessToken={setAccessToken} setExpire={setExpire} />
            {(window.screen.width < 800)?
                <MobileLoginSVG className={styles.svgMobile} />
                :
                <CharactersSVG className={styles.svg} />
            }

        </main>
    )
}

export default Authorization;