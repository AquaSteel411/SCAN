import * as React from "react";
import { connect } from "react-redux";
import styles from '../Styles/Beginner.module.scss'
import BeginnerSVG from '../Svg/Beginner.module.svg'


function Beginner(props) {
    const add = () => {
        console.log('action done')
        props.addElement('gg')
        // console.log(props.store)
    }
    console.log(props)

    return (
        <div className={styles.card}>
            <header className={styles.header}>
                <h2 className={styles.h2Header}>Beginner</h2>
                <p className={styles.cardText}>Для небольшого исследования</p>
                <BeginnerSVG className={styles.svg} />
            </header>
            <h2 className={styles.h2Rate}>
                790 ₽
                <span className={styles.oldRate}>
                    1 200 ₽
                </span>
            </h2>
            <p className={styles.cardText}>или 279 ₽/мес. при рассрочке на 24 мес.</p>
            <p className={styles.inRate}> В тариф входит:</p>
            <ul className={styles.markers}>
                <li>Все пункты тарифа Beginner</li>
                <li>Экспорт истории</li>
                <li>Рекомендации по приоритетам</li>
            </ul>
            <button className={styles.btnDetail} onClick={add} >Подробнее</button>
        </div>
    )
}

export default connect(
    state => ({
        state
    }),
    dispatch => ({
        addElement: () => {
            dispatch({type: 'ADD_TODO', payload: '123'})
        }
    })
)(Beginner) ;