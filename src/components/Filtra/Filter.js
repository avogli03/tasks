import React from "react";
import filterLogo from '../../assets/filter.png'
import styles from './Filter.module.css'

const Filter = () => {
    return (
        <div className={styles.filter}>
            <img src={filterLogo} alt="filter" className={styles['filter-logo']} />
            <p className={styles['filter-title']}>Filtra</p>
            <p className={styles['paragraph-one']}>Tariffa oraira</p>
            <input type="range" className={styles['range']} />
            <p className={styles['paragraph-two']}>Luogo lezione</p>
            <div className={styles.checkbox}>
                <input type="checkbox" value="Casa Tutor" /> <span>Casa Tutor</span>
                <br /><br /><input type="checkbox" value="Casa Tutor" /> <span>Casa Studente</span>
                <br /><br /><input type="checkbox" value="Casa Tutor" checked /> <span>Online</span>
            </div>
        </div>
    )
}

export default Filter;