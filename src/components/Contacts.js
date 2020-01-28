import React from 'react';
import styles from './Contacts.module.css';


function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.insideBorder}>
              <span className={styles.span}>Contacts</span>
                <div className={styles.containerContacts}>
                    <input placeholder='Name'></input>
                    <input placeholder='Email'></input>
                    <textarea placeholder='Messages' className={styles.textarea}></textarea>
                </div>
              <button className={styles.button}>Отправить</button>
            </div>
        </div>

    );
}

export default Contacts;
