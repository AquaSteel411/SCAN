import * as React from "react";
import styles from '../Styles/Rates.module.scss'
import Beginner from "./Beginner";
import Pro from "./Pro";
import Business from "./Business";


function Rates() {

    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>Наши тарифы</h1>
            <section className={styles.rates}>
                <Beginner />
                <Pro />
                <Business />
            </section>
        </section>
    )
}

export default Rates;