import React from 'react';
import styles from './Slogan.module.css';


function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.containerSlogan}>
                        <span className={styles.text}>Рассматриваю варианты удалённой работы </span>
                        <button className={styles.button}>Нанять меня</button>
            </div>
        </div>
    );
}
export default Slogan;

