import * as React from "react";
import SliderResults from "./SliderResults";
import styles from '../Styles/Results.module.scss';
import SpinnerSVG from "../Svg/Spinner.module.svg";


function Results({resultSearch}) {

    return (
        <section className={styles.results}>
            <h1 className={styles.h1}>Общая сводка</h1>
            {!resultSearch.length?
                <SpinnerSVG className={styles.spinner} />
                :
                <>
                    <p className={styles.p}>Найдено {resultSearch.length} вариантов</p>
                    <SliderResults resultSearch={resultSearch} />
                </>
            }

        </section>
    )
}

export default Results;