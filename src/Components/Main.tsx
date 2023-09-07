import * as React from "react";
import MainInfo from "./MainInfo";
import WhyUs from "./WhyUs";
import Image1 from '../Svg/Image1.module.svg'
import styles from '../Styles/Main.module.scss'
import Rates from "./Rates";


function Main() {

    return (
        <main className={styles.main}>
            <MainInfo />
            <WhyUs />
            <div className={styles.svg}>
                <Image1 />
            </div>
            <Rates />
        </main>
    )
}

export default Main;