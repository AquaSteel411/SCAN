import * as React from "react";
import styles from '../Styles/WhyUs.module.scss'
import Slider from "./Slider";


function WhyUs() {

    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>
                Почему именно мы
            </h1>
            <Slider />
        </section>
    )
}

export default WhyUs;