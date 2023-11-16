import * as React from "react";
import styles from '../Styles/Business.module.scss'
import BeginnerSVG from '../Svg/Business.module.svg'


function Business() {

    return (
        <section className={styles.card}>
            <header className={styles.header}>
                <h2 className={styles.h2Header}>Business</h2>
                <p className={styles.cardText}>Для корпоративных клиентов</p>
                <BeginnerSVG className={`${styles.svg} ${styles.smallSvg}`} />
            </header>
            <h2 className={styles.h2Rate}>
                2 379 ₽
                <span className={styles.oldRate}>
                    3 700 ₽
                </span>
            </h2>
            <p className={styles.inRate}> В тариф входит:</p>
            <ul className={styles.markers}>
                <li className={styles.li}>Все пункты тарифа Pro</li>
                <li className={styles.li}>Безлимитное количество запросов</li>
                <li className={styles.li}>Приоритетная поддержка</li>
            </ul>
            <button className={styles.btnDetail}>Подробнее</button>
        </section>
    )
}

export default Business;