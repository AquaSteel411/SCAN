import * as React from "react";
import styles from '../Styles/Beginner.module.scss'
import BeginnerSVG from '../Svg/Beginner.module.svg'


export default function Beginner() {

    return (
        <section className={styles.card}>
            <header className={styles.header}>
                <h2 className={styles.h2Header}>Beginner</h2>
                <p className={styles.cardText}>Для небольшого исследования</p>
                <BeginnerSVG className={`${styles.svg} ${styles.smallSvg}`} />
            </header>
            <h2 className={styles.h2Rate}>
                790 ₽
                <span className={styles.oldRate}>
                    1 200 ₽
                </span>
            </h2>
            <p className={styles.cardText}>или 279 ₽/мес. при рассрочке на 24 мес.</p>
            <p className={styles.inRate}> В тариф входит:</p>
            <ul className={styles.markers}>
                <li className={styles.li}>Все пункты тарифа Beginner</li>
                <li className={styles.li}>Экспорт истории</li>
                <li className={styles.li}>Рекомендации по приоритетам</li>
            </ul>
            <button className={styles.btnDetail}>Подробнее</button>
        </section>
    )
}
