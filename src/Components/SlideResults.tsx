import * as React from "react";

import styles from '../Styles/SlideResults.module.scss';

function SlideResults({date, all, risk}) {

    return (
        <div className={styles.slide}>
            <p className={styles.p}>{date}</p>
            <p className={styles.p}>{all}</p>
            <p className={styles.p}>{risk}</p>
        </div>
    )
}

export default SlideResults;