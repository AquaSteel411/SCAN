import * as React from "react";
import styles from "../Styles/ResultsInfo.module.scss";
import ResultsSearchSVG from "../Svg/ResultsSerach.module.svg";


function ResultsInfo() {

    return (
        <section>
            <h1 className={styles.h1}>Ищем.
                <span className={styles.span}> Скоро<br/>будут результаты</span>
            </h1>
            <p className={styles.p}>Поиск может занять некоторое время, просим сохранять терпение.</p>
            <ResultsSearchSVG className={styles.svg} />
        </section>
    )
}

export default ResultsInfo;