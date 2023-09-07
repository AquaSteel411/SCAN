import * as React from "react";
import LogoSVG from '../Svg/LogoFooter.module.svg'
import styles from '../Styles/Footer.module.scss'


function Footer() {

    return (
        <footer className={styles.footer}>
            <LogoSVG className={styles.logo}/>
            <section className={styles.contacts}>
                <p>
                    г. Москва, Цветной б-р, 40<br/>
                    +7 495 771 21 11<br/>
                    info@skan.ru
                </p>
                <p className={styles.copyright}>Copyright. 2022</p>
            </section>
        </footer>
    )
}

export default Footer;