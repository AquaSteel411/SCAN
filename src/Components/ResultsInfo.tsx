import * as React from "react";
import styles from "../Styles/ResultsInfo.module.scss";
import ResultsSearchSVG from "../Svg/ResultsSerach.module.svg";
import SmallSVG from '../Svg/SmallResultsSVG.module.svg';


function ResultsInfo() {

    return (
        <section>
            <h1 className={styles.h1}>Ищем. Скоро
                {(window.screen.width < 450)?
                    <></>
                    :
                    <br/>
                } будут результаты
            </h1>
            <p className={styles.p}>Поиск может занять некоторое время, просим сохранять терпение.</p>
            {(window.screen.width < 800)?
                <SmallSVG className={styles.smallSvg} />
                :
                <ResultsSearchSVG className={styles.svg} />
            }

        </section>
    )
}

export default ResultsInfo;