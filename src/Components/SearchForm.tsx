import * as React from "react";
import styles from '../Styles/SearchForm.module.scss';
import {useState} from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function SearchForm() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);



    return (
        <form className={styles.formSearch}>
            <label className={styles.tin}>ИНН компании
                <span className={styles.footnote}>*</span>
            </label>
            <input className={styles.form} placeholder='10 цифр'/>
            <label className={styles.ton}>Тональность</label>
            <select className={`${styles.form} ${styles.customSelect}`}>
                <option>Любая</option>
                <option>Определенная</option>
            </select>
            <label className={styles.ton}>Количество документов в выдаче
                <span className={styles.footnote}>*</span>
            </label>
            <input className={styles.form} placeholder='От 1 до 1000'/>
            <label className={styles.range}>Диапазон поиска
                <span className={styles.footnote}>*</span>
            </label>

            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                closeOnScroll={true}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                dateFormat="dd.MM.yyyy"
                placeholderText="Любая дата"
                maxDate={new Date()}
                customInput={<input className={styles.calendar}/>}
            />
            <div className={styles.dateEnd}>
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    closeOnScroll={true}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    dateFormat="dd.MM.yyyy"
                    placeholderText="Любая дата"
                    maxDate={new Date()}
                    customInput={<input className={styles.calendar}/>}
                />
            </div>
            <div className={styles.checkBox}>
                <input type="checkbox" className={styles.customRadio} id="1" name="scales"/>
                <label htmlFor="1">Признак максимальной полноты</label><br/>
                <input type="checkbox" className={styles.customRadio} id="2" name="scales"/>
                <label htmlFor="2">Упоминания в бизнес-контексте</label><br/>
                <input type="checkbox" className={styles.customRadio} id="3" name="scales"/>
                <label htmlFor="3">Главная роль в публикации</label><br/>
                <input type="checkbox" className={styles.customRadio} id="4" name="scales" />
                <label htmlFor="4">Публикации только с риск-факторами</label><br/>
                <input type="checkbox" className={styles.customRadio} id="5" name="scales" />
                <label htmlFor="5">Включать технические новости рынков</label><br/>
                <input type="checkbox" className={styles.customRadio} id="6" name="scales" />
                <label htmlFor="6">Включать анонсы и календари</label><br/>
                <input type="checkbox" className={styles.customRadio} id="6" name="scales" />
                <label htmlFor="6">Включать сводки новостей</label><br/>
            </div>
            <button className={styles.btn}>Поиск</button>
            <p className={styles.required}>* Обязательные к заполнению поля</p>
        </form>
    )
}

export default SearchForm;