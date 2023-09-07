import * as React from "react";
import CharactersSVG from '../Svg/Characters.module.svg'
import styles from '../Styles/Authorization.module.scss'
import Login from "./Login";


function Authorization() {

    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Для оформления подписки<br/>на тариф, необходимо авторизоваться.</h1>
            <CharactersSVG className={styles.svg} />
            <Login />

        </main>
    )
}

export default Authorization;