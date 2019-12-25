import React from 'react';
import styles from './Slogan.module.css';


function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.containerSlogan}>
                        <div className={styles.text}>Рассматриваю варианты удалённой работы </div>
                        <button className={styles.button}>Нанять меня </button>
            </div>
        </div>
    );
}
export default Slogan;

