import * as React from "react";
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from "./Arrows";
import SlideResults from "./SlideResults";
import styles from '../Styles/SliderResults.module.scss';
import '../Styles/SliderResults.css';
import {useEffect} from "react";
import {settings12241500, settings8001224, settingsAfter1500, settingsBefore600} from "./SettingsSlider";


function SliderResults({resultSearch}) {
    let settings;

    useEffect(() => {
        $('.slick-list').css('margin-right', '10px')
        $('.slick-next').css('margin-right', '-20px')
        $('.slick-prev').css('margin-left', '-148px')

    }, [])
    if (window.screen.width < 600) {
        settings = settingsBefore600
        $('.slick-prev').css('margin-left', '-10px')
        $('.slick-prev').css('margin-top', '47px')
        $('.slick-next').css('margin-right', '-10px')
        $('.slick-next').css('margin-top', '46px')
    } else if ((window.screen.width > 600) && (window.screen.width < 1224)) {
        settings = settings8001224
    } else if (((window.screen.width > 1224) && (window.screen.width < 1500))) {
        settings = settings12241500
    } else {
        settings = settingsAfter1500
    }

    return (
        <>

            <section className={styles.slider}>
                <section className={styles.description}>
                    <p className={styles.pDescription}>Период</p>
                    <p className={styles.pDescription}>Всего</p>
                    <p className={styles.pDescription}>Риски</p>
                </section>
                <SliderSlick {...settings}>
                    {resultSearch.map((el, index) => <SlideResults key={index}
                                                                   date={el.date}
                                                                   all={el.all}
                                                                   risk={el.risk} />)}

                </SliderSlick>
            </section>
        </>

    )
}

export default SliderResults;