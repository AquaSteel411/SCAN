import * as React from "react";
import SearchBigSVG from '../Svg/SearchBig.module.svg';
import Search1SVG from '../Svg/Search1.module.svg';
import Search2SVG from  '../Svg/Search2.module.svg';
import SmallSearchSVG1 from '../Svg/SmallSearchSVG1.module.svg';
import SmallSearchSVG2 from '../Svg/SmallSearchSVG2.module.svg';
import styles from '../Styles/SearchCompany.module.scss';
import SearchForm from "./SearchForm";

function SearchCompany({accessToken, setResultSearch, setIds, loginUser}) {

    return (
        <>
            {!loginUser?
                <main className={styles.main}>
                    <p className={styles.pAuth}>Для использования услуг сайта необходимо авторизоваться!</p>
                </main>

                :
                <main className={styles.main}>
                    <h1 className={styles.h1}>Найдите необходимые<br/>данные в пару кликов.</h1>
                    <p className={styles.p}>Задайте параметры поиска.<br/>Чем больше заполните, тем точнее поиск</p>
                    <SearchForm accessToken={accessToken} setResultSearch={setResultSearch} setIds={setIds} />
                    {(window.screen.width < 1224)?
                        <SmallSearchSVG1 className={styles.smallSvg1} />
                        :
                        <>
                            <Search1SVG className={styles.svg1} />
                            <Search2SVG className={styles.svg2} />
                        </>

                    }
                    {(window.screen.width < 1500)?
                        <SmallSearchSVG2 className={styles.smallSvg2}  />
                        :
                        <SearchBigSVG className={styles.svgBig} />

                    }
                </main>
            }

        </>

    )
}

export default SearchCompany;