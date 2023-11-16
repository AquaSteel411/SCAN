import * as React from "react";
import styles from '../Styles/SearchForm.module.scss';
import {useEffect, useState} from "react";
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {validateDate, validateInn, validateQuantity} from './AppService';
import results from "./Results";


export default function SearchForm({accessToken, setResultSearch, setIds}) {

    const [tin, setTin] = useState('');
    const [ton, setTon] = useState('Любая');
    const [quantityDoc, setQuantityDoc] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [maxFull, setMaxFull] = useState(false);
    const [inBusinessNews, setInBusinessNews] = useState(false);
    const [riskFactors, setRiskFactors] = useState(false);
    const [mainRole, setMainRole] = useState(false);
    const [techNews, setTechNews] = useState(false);
    const [announcements, setAnnouncements] = useState(false);
    const [digests, setDigests] = useState(false);

    const [errorTin, setErrorTin] = useState('')
    const [errorQuantityDoc, setErrorQuantityDoc] = useState('')
    const [errorDate, setErrorDate] = useState('')

    const URL_HISTOGRAMS = 'https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms'
    const URL_OBJECT_SEARCH = 'https://gateway.scan-interfax.ru/api/v1/objectsearch'

    const navigate = useNavigate()



    const formattedDate = (date) => {
        return new Date(String(date).slice(0, 28))
    }

    // 7710137066
    const postAxios = (url) => {
        return axios(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': `Bearer ${accessToken}`,
                },
                data: {
                    "issueDateInterval": {
                        "startDate": moment(startDate.toISOString()),
                        "endDate": moment(endDate.toISOString())
                    },
                    "searchContext": {
                        "targetSearchEntitiesContext": {
                            "targetSearchEntities": [
                                {
                                    "type": "company",
                                    "sparkId": null,
                                    "entityId": null,
                                    "inn": tin,
                                    "maxFullness": maxFull,
                                    "inBusinessNews": inBusinessNews
                                }
                            ],
                            "onlyMainRole": mainRole,
                            "tonality": "any",
                            "onlyWithRiskFactors": riskFactors,
                            "riskFactors": {
                                "and": [],
                                "or": [],
                                "not": []
                            },
                            "themes": {
                                "and": [],
                                "or": [],
                                "not": []
                            }
                        },
                        "themesFilter": {
                            "and": [],
                            "or": [],
                            "not": []
                        }
                    },
                    "searchArea": {
                        "includedSources": [],
                        "excludedSources": [],
                        "includedSourceGroups": [],
                        "excludedSourceGroups": []
                    },
                    "attributeFilters": {
                        "excludeTechNews": !techNews,
                        "excludeAnnouncements": !announcements,
                        "excludeDigests": !digests
                    },
                    "similarMode": "duplicates",
                    "limit": quantityDoc,
                    "sortType": "sourceInfluence",
                    "sortDirectionType": "desc",
                    "intervalType": "month",
                    "histogramTypes": [
                        "totalDocuments",
                        "riskFactors"
                    ]
                }
            })
    }

    const validate = () => {
        let result = true
        if (!validateInn(tin, setErrorTin)) {
            document.querySelector(`#inn`).classList.add(styles.formError);
            result = false
        } else {
            document.querySelector(`#inn`).classList.remove(styles.formError);
            setErrorTin('')
        }
        if (!validateQuantity(quantityDoc, setErrorQuantityDoc)) {
            document.querySelector('#quantity').classList.add(styles.formError);
            result = false
        } else {
            document.querySelector('#quantity').classList.remove(styles.formError);
            setErrorQuantityDoc('')
        }
        if (!validateDate(startDate, endDate, setErrorDate)) {
            document.querySelector('#startDate').classList.add(styles.formError)
            document.querySelector('#endDate').classList.add(styles.formError)
            result = false
        } else {
            document.querySelector('#startDate').classList.remove(styles.formError)
            document.querySelector('#endDate').classList.remove(styles.formError)
            setErrorDate('')
        }

        return result
    }



    const submitHandler = e => {
        e.preventDefault();

        if (!validate()) {
            return
        }

        postAxios(URL_HISTOGRAMS)
            .then(response => {
                if (response) {
                    navigate('/result')
                    console.log(response.data.data)
                    return response.data.data
                } else {
                    throw Error(`Something went wrong: code ${response.status}`)
                }
            })
            .then((data) => {
                let listResult = []
                data[0].data.map(el => {
                    listResult.push({
                        date: moment(el.date).utc().format('DD.MM.YYYY'),
                        all: el.value,
                        risk: ''
                    })
                })
                data[1].data.map((el, index) => {
                    listResult[index].risk = el.value
                })
                setResultSearch(listResult)
            })
            .then(() => {
                postAxios(URL_OBJECT_SEARCH)
                    .then(response => {
                        if (response) {
                            console.log(response.data)
                            return response.data.items
                        } else {
                            throw Error(`Something went wrong: code ${response.status}`)
                        }
                    })
                    .then(items => {
                        let listId = [];
                        items.map(item => {
                            listId.push(item.encodedId)
                        })
                        console.log(listId)
                        setIds(listId)
                    })
            })
            .catch(error => {
                console.log(error)
            })

    }



    return (
        <section className={styles.formSearch}>
            <label className={styles.tin}>ИНН компании
                <span className={styles.footnote}>*</span>
            </label>
            <input id='inn' className={styles.form} placeholder='10 цифр' value={tin}
                   onChange={e => setTin(e.target.value)} />
            <p className={styles.error}>{errorTin}</p>
            <label className={styles.ton}>Тональность</label>
            <select className={`${styles.form} ${styles.customSelect}`} value={ton}
                    onChange={e => setTon(e.target.value)}>
                <option>Любая</option>
                <option>Позитивная</option>
                <option>Негативная</option>
            </select>
            <label className={styles.ton}>Количество документов в выдаче
                <span className={styles.footnote}>*</span>
            </label>
            <input id='quantity' className={styles.form} placeholder='От 1 до 100' value={quantityDoc}
                   onChange={e => setQuantityDoc(e.target.value)} />
            <p className={styles.error}>{errorQuantityDoc}</p>
            <label className={styles.range}>Диапазон поиска
                <span className={styles.footnote}>*</span>
            </label>

            <DatePicker
                id='startDate'
                selected={startDate}
                onChange={(date) => setStartDate(formattedDate(date))}
                closeOnScroll={true}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                dateFormat="dd.MM.yyyy"
                placeholderText="Дата начала"
                maxDate={new Date()}
                customInput={<input className={styles.calendar}/>}
            />
            <div className={styles.dateEnd}>
                <DatePicker
                    id='endDate'
                    selected={endDate}
                    onChange={(date) => setEndDate(formattedDate(date))}
                    closeOnScroll={true}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    dateFormat="dd.MM.yyyy"
                    placeholderText="Дата конца"
                    maxDate={new Date()}
                    customInput={<input className={styles.calendar}/>}
                />
            </div>
            <p className={styles.errorDate}>{errorDate}</p>
            <section className={styles.checkBox}>
                <input type="checkbox" className={styles.customRadio} id="1" checked={maxFull}
                       onChange={(e) => setMaxFull(e.target.checked)}/>
                <label htmlFor="1">Признак максимальной полноты</label><br/>
                <input type="checkbox" className={styles.customRadio} id="2" checked={inBusinessNews}
                       onChange={(e) => setInBusinessNews(e.target.checked)}/>
                <label htmlFor="2">Упоминания в бизнес-контексте</label><br/>
                <input type="checkbox" className={styles.customRadio} id="3" checked={mainRole}
                       onChange={(e) => setMainRole(e.target.checked)}/>
                <label htmlFor="3">Главная роль в публикации</label><br/>
                <input type="checkbox" className={styles.customRadio} id="4" checked={riskFactors}
                       onChange={(e) => setRiskFactors(e.target.checked)}/>
                <label htmlFor="4">Публикации только с риск-факторами</label><br/>
                <input type="checkbox" className={styles.customRadio} id="5" checked={techNews}
                       onChange={(e) => setTechNews(e.target.checked)}/>
                <label htmlFor="5">Включать технические новости рынков</label><br/>
                <input type="checkbox" className={styles.customRadio} id="6" checked={announcements}
                       onChange={(e) => setAnnouncements(e.target.checked)} />
                <label htmlFor="6">Включать анонсы и календари</label><br/>
                <input type="checkbox" className={styles.customRadio} id="7" checked={digests}
                       onChange={(e) => setDigests(e.target.checked)}/>
                <label htmlFor="7">Включать сводки новостей</label><br/>
            </section>
            <button className={styles.btn} onClick={(e) => submitHandler(e)}>Поиск</button>
            <p className={styles.required}>* Обязательные к заполнению поля</p>
        </section>
    )
}