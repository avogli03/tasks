import React from "react";
import styles from './SearchForm.module.css';

const SearchForm = () => {
    return (
        <form className={styles.form}>
            <div className={styles['info']}>
                <label>Materia</label>
                <label>Livello</label>
                <label>Dove</label>
            </div>
            <div className={styles['input']}>
                <input type="text" placeholder="Matematica" className={styles['materia']} />
                <input list="livello" placeholder="Elementari" className={styles['livello']} />
                <datalist id="livello">
                    <option value="Elementari" />
                    <option value="Intermedio" />
                    <option value="Avanzato" />
                </datalist>
                <input type="text" placeholder="Indrizzo o CAP" className={styles['dove']} />
                <input type="submit" value="Cerca" className={styles['button']} />
            </div>
            <div className={styles.results}>
                <p className={styles['search-result']}><span>5562</span> Tutor trovati. Prezzo medio <span>14€/ora</span></p>
            </div>
            <div className={styles.ordina}>
                <p>Ordina per </p>
                <input list="consigliati" placeholder="Consigliati" />
                <datalist id="consigliati">
                    <option value="Consigliati" />
                </datalist>
            </div>
        </form>
    )
}

export default SearchForm;