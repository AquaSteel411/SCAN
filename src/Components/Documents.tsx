import * as React from "react";
import styles from '../Styles/Documents.module.scss';
import {useEffect, useState, lazy, Suspense} from "react";
import axios from "axios";
import moment from 'moment';

const Doc = lazy(() =>
    import('./Doc')
);


function Documents({accessToken, ids}) {

    const [docs, setDocs] = useState([]);
    const [listItems, setListItems] = useState(10);

    const parser = new DOMParser();

    useEffect(() => {
        if (ids.length !== 0) {
            axios(
                'https://gateway.scan-interfax.ru/api/v1/documents',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': `Bearer ${accessToken}`,
                    },
                    data: {
                        "ids": ids
                    }
                })
                .then(response => {
                    if (response) {
                        console.log(response)
                        return response.data
                    } else {
                        throw Error(`Something went wrong: code ${response.status}`)
                    }
                })
                .then(data => {
                    setDocs(data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [ids])

    useEffect(() => {
        if ((listItems >= docs.length) && (docs.length !== 0)) {
            document.querySelector(`.${styles.btn}`).classList.toggle(styles.hide)
        }
    }, [listItems])

    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>Список документов</h1>

            <section className={styles.documents}>
                {docs.slice(0, listItems).map((doc, index) =>
                    <Suspense fallback={<div>Loading...</div>} key={index}>
                        <Doc
                            date={moment(doc.ok.issueDate).utc().format('DD.MM.YYYY')}
                            nameUrl={doc.ok.source.name}
                            url={doc.ok.url}
                            title={doc.ok.title.text}
                            isTechNews={doc.ok.attributes.isTechNews}
                            isAnnouncement={doc.ok.attributes.isAnnouncement}
                            isDigest={doc.ok.attributes.isDigest}
                            text={doc.ok.content.markup}
                            wordCount={doc.ok.attributes.wordCount} />
                    </Suspense>

                )}
            </section>

            {(docs.length === 0)?
                <></>
                :
                <button className={styles.btn}
                        onClick={() => setListItems(listItems + 10)}>
                    Показать больше
                </button>
            }

        </section>
    )
}

export default Documents;