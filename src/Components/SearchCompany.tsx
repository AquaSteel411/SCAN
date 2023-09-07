import * as React from "react";
import SearchBigSVG from '../Svg/SearchBig.module.svg';
import Search1SVG from '../Svg/Search1.module.svg';
import Search2SVG from  '../Svg/Search2.module.svg';
import styles from '../Styles/SearchCompany.module.scss';
import SearchForm from "./SearchForm";

function SearchCompany() {

    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Найдите необходимые<br/>данные в пару кликов.</h1>
            <p className={styles.p}>Задайте параметры поиска.<br/>Чем больше заполните, тем точнее поиск</p>
            <SearchForm />
            <SearchBigSVG className={styles.svgBig} />
            <Search1SVG className={styles.svg1} />
            <Search2SVG className={styles.svg2} />
        </main>
    )
}

export default SearchCompany;