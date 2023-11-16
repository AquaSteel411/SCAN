import * as React from "react";
import styles from '../Styles/ResultsSearch.module.scss';
import ResultsInfo from "./ResultsInfo";
import Results from "./Results";
import Documents from "./Documents";


function ResultsSearch({accessToken, resultSearch, ids, loginUser}) {


    return (
        <main className={styles.main}>
            {(!loginUser)?
                <p className={styles.pAuth}>Для использования услуг сайта необходимо авторизоваться!</p>
                :
                <>
                    <ResultsInfo />
                    <Results resultSearch={resultSearch} />
                    <Documents accessToken={accessToken} ids={ids} />
                </>
            }


        </main>
    )
}

export default ResultsSearch;