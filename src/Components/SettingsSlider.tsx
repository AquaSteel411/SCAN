import {NextArrow, PrevArrow} from "./Arrows";
import * as React from "react";

export const settingsBefore600 = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

export const settings8001224 = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 700,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 800,
            settings: { slidesToShow: 5 }
        },
        {
            breakpoint: 1000,
            settings: { slidesToShow: 6 }
        },
        {
            breakpoint: 1224,
            settings: { slidesToShow: 7 }
        },
    ],
};

export const settings12241500 = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 8,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // responsive: [
    //     {
    //         breakpoint: 1500,
    //         settings: { slidesToShow: 9 }
    //     },
    //     {
    //         breakpoint: 1300,
    //         settings: { slidesToShow: 8 }
    //     },
    // ]
};

export const settingsAfter1500 = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 10,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};