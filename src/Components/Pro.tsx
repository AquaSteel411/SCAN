import * as React from "react";
import styles from '../Styles/Pro.module.scss'
import BeginnerSVG from '../Svg/Pro.module.svg'


function Pro() {

    return (
        <div className={styles.card}>
            <header className={styles.header}>
                <h2 className={styles.h2Header}>Pro</h2>
                <p className={styles.cardText}>Для HR и фрилансеров</p>
                <BeginnerSVG className={styles.svg} />
            </header>
            <h2 className={styles.h2Rate}>
                1 299 ₽
                <span className={styles.oldRate}>
                    2 600 ₽
                </span>
            </h2>
            <p className={styles.cardText}>или 150 ₽/мес. при рассрочке на 24 мес.</p>
            <p className={styles.inRate}> В тариф входит:</p>
            <ul className={styles.markers}>
                <li>Безлимитная история запросов</li>
                <li>Безопасная сделка</li>
                <li>Поддержка 24/7</li>
            </ul>
            <button className={styles.btnDetail}>Подробнее</button>
        </div>
    )
}

export default Pro;