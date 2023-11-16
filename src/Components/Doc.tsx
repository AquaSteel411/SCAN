import * as React from "react";
import { htmlToText } from 'html-to-text';
import styles from '../Styles/Doc.module.scss';
import img1 from '../Assets/img1.jpeg';
import {useNavigate} from "react-router-dom";



export default function Doc(
    {
        date, nameUrl, url, title, isTechNews, text,
        isAnnouncement, isDigest, wordCount,
    }
) {

    const parser = new DOMParser();
    const docText = parser.parseFromString(text, "application/xml");

    const txt = htmlToText(docText.documentElement.textContent, {
        wordwrap: 130
    });

    const navigate = useNavigate();



    return (
        <section className={styles.section}>
            <span className={styles.date}>{date}</span>
            {url?
                <a className={styles.source} href={url}>{nameUrl}</a>
                :
                <span className={styles.source}>{nameUrl}</span>
            }

            <h3 className={styles.title}>{title}</h3>
            {isTechNews?
                <span className={styles.tecNews}>Технические новости</span>
                :
                <></>
            }
            {isAnnouncement?
                <span className={styles.announcement}>Анонсы и события</span>
                :
                <></>
            }
            {isDigest?
                <span className={styles.digest}>Сводки новостей</span>
                :
                <></>
            }
            <figure className={styles.containerImg}>
                <img src={img1} alt='img1' className={styles.img}/>
            </figure>
            <p className={styles.text}>
                {(txt.length > 600)? `${txt.slice(0, 600)}...` : txt}
            </p>
            <button className={styles.btn} onClick={(e) => {
                e.preventDefault();
                window.location.href=url;
            }}>Читать в источнике</button>
            <span className={styles.wordCount}>{wordCount} слов</span>
        </section>
    )
}