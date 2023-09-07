import * as React from "react";
import SliderResults from "./SliderResults";
import styles from '../Styles/Results.module.scss';


function Results() {

    return (
        <section className={styles.results}>
            <h1 className={styles.h1}>Общая сводка</h1>
            <p className={styles.p}>Найдено 4 221 вариантов</p>
            <SliderResults />
        </section>
    )
}

export default Results;