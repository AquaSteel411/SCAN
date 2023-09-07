import * as React from "react";

import MainInfoSVG from '../Svg/Main-info-1.module.svg'
import styles from '../Styles/MainInfo.module.scss'


function MainInfo() {

    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>
                СЕРВИС ПО ПОИСКУ ПУБЛИКАЦИЙ<br/>О КОМПАНИИ<br/>ПО ЕГО ИНН
            </h1>
            <p className={styles.p}>Комплексный анализ публикаций, получение данных<br/>
                в формате PDF на электронную почту.
            </p>
            <button className={styles.btn} onClick={() => {
                window.location.assign('/search');
            }}>
                Запросить данные</button>
            <MainInfoSVG className={styles.svg} />
        </section>
    )
}

export default MainInfo;