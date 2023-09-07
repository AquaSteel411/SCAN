import * as React from "react";
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from "./Arrows";
import SlideResults from "./SlideResults";
import styles from '../Styles/SliderResults.module.scss';
import '../Styles/SliderResults.css';
import {useEffect} from "react";


function SliderResults() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 10,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        // lazyLoad: 'ondemand',
    };

    useEffect(() => {
        $('.slick-list').css('margin-right', '10px')
        $('.slick-next').css('margin-right', '-20px')
        $('.slick-prev').css('margin-left', '-148px')

    }, [])
    return (
        <>

            <div className={styles.slider}>
                <div className={styles.description}>
                    <p className={styles.pDescription}>Период</p>
                    <p className={styles.pDescription}>Всего</p>
                    <p className={styles.pDescription}>Риски</p>
                </div>
                <SliderSlick {...settings}>
                    <SlideResults />
                    <SlideResults />
                    <SlideResults />
                    <SlideResults />
                    <SlideResults />
                    <SlideResults />
                    <SlideResults />
                    <SlideResults />
                    <SlideResults />
                    <SlideResults />
                    <SlideResults />
                    <SlideResults />
                    <SlideResults />
                    <SlideResults />

                </SliderSlick>
            </div>
        </>

    )
}

export default SliderResults;