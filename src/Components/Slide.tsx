import * as React from "react";
import styles from '../Styles/Slide.module.scss'


function Slide(props) {

    return (
        <article className={styles.card}>
            <props.svg className={styles.svg} />
            <p className={styles.text}>{ props.text }</p>
        </article>
    )
}

export default Slide;