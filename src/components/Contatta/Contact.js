import React from "react";
import star from '../../assets/star.png'
import location from '../../assets/location.png'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles['picture-text']}>
                <p>Giovanni C.</p>
            </div>
            <div className={styles.tags}>
                <p className={styles['tag1']}>Supertutor</p>
                <p className={styles['tag2']}>Verificato</p>
            </div>
            <div className={styles.card}>
                <h2 className={styles['title']}>Giovanni C.</h2>
                <p className={styles['info']}>Insegnante di <span className={styles['blue']}>Matematica</span>, Aiuto tesi, Contabilita e bilancio, <br />Controllo di gestione</p>
            </div>
            <div className={styles.labels}>
                <label>Lezioni accettate</label>
                <label>Accetta in</label>
                <label>Eccellente</label>
            </div>
            <div className={styles.rating} />
            <div className={styles.percentage}>
                <label>99 %</label>
            </div>
            <div className={styles.accetta}>
                <label>2 ore</label>
            </div>
            <div className={styles.eccellente}>
                <img src={star} alt="star" className={styles['star']} />
                <label className={styles['ratingNumber']}>4.9/5</label>
                <label className={styles['reviews']}> (259)</label>
            </div>
            <div className={styles.map}>
                <img src={location} alt="location" className={styles['location']} />
                <label className={styles['location-name']}>Milano</label>
                <label className={styles['mappa']}>Mappa</label>
            </div>
            <div className={styles.price}>
                <label className={styles['partire']}>A partire da</label>
                <label className={styles['priceperhour']}><span>20</span>€/ora</label>
                <input type="submit" value="Contatta" />
            </div>
            <div className={styles.info}>
                <p>9000 ore d'insegnamento tra l'aula e l'on line. Specialista di marketing, controllo costi, critica alla globalizzazione. Insegno diritto, economia, ge <span>... Scopri di più</span></p>
            </div>
        </div>
    )
}

export default Contact;