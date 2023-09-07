import * as React from "react";
import styles from '../Styles/ResultsSearch.module.scss';
import ResultsInfo from "./ResultsInfo";
import Results from "./Results";
import Documents from "./Documents";


function ResultsSearch() {


    return (
        <main className={styles.main}>
            <ResultsInfo />
            <Results />
            <Documents />

        </main>
    )
}

export default ResultsSearch;