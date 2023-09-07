import * as React from "react";

import ArrowLeft from '../Svg/ArrowLeft.module.svg'
import ArrowRight from '../Svg/ArrowRight.module.svg'
import styles from "../Styles/Arrows.module.scss";

export const NextArrow = (props) => {
    const { className, onClick, style} = props;
    return (
        <ArrowRight
            className={`${className} ${styles.arrow} ${style}`}
            onClick={onClick}
        />
    );
}

export const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <ArrowLeft
            className={`${className} ${styles.arrow}`}
            onClick={onClick}
        />
    );
}


