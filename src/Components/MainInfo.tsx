import * as React from "react";

import MainInfoSVG from '../Svg/Main-info-1.module.svg';
import SmallMainInfoSVG from '../Svg/MainInfo2.module.svg';
import styles from '../Styles/MainInfo.module.scss';
import {useNavigate} from "react-router-dom";


function MainInfo() {

    const navigate = useNavigate();

    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>
                СЕРВИС ПО ПОИСКУ ПУБЛИКАЦИЙ<br/>О КОМПАНИИ<br/>ПО ЕГО ИНН
            </h1>
            <p className={styles.p}>Комплексный анализ публикаций, получение данных {(window.screen.width < 450)?
                <></>
                :
                <br/>
            }
                в формате PDF на электронную почту.
            </p>
            <button className={styles.btn} onClick={() => {
                navigate('/search');
            }}>
                Запросить данные</button>
            <MainInfoSVG className={styles.svg} />
            <SmallMainInfoSVG className={styles.smallSvg} />
        </section>
    )
}

export default MainInfo;