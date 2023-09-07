import * as React from "react";
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TimeSVG from '../Svg/WhyUsTime.module.svg'
import dbSVG from '../Svg/WhyUsDB.module.svg'
import DefenseSVG from '../Svg/WhyUsDefense.module.svg'
import { NextArrow, PrevArrow } from "./Arrows";
import Slide from "./Slide";


function Slider() {

    const textTime = 'Высокая и оперативная скорость обработки заявки'
    const textDB = 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
    const textDefense = 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <section>
            <SliderSlick {...settings}>
                <Slide svg={TimeSVG} text={textTime} />
                <Slide svg={dbSVG} text={textDB} />
                <Slide svg={DefenseSVG} text={textDefense} />
                <Slide svg={TimeSVG} text={textTime} />
            </SliderSlick>
        </section>
    );
}

export default Slider;