import React from 'react';
import styles from './Contacts.module.css';


function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.insideBorder}>
              <span className={styles.spanContacts}>Contacts</span>
                <form>
                    <div className={styles.groupval}>
                        <div className={styles.label}>
                            Full name
                            <strong>*</strong>
                        </div>
                        <input type="text" name="name" placeholder="ex: Alexander Lipen"/>
                    </div>
                    <div className={styles.groupval}>
                        <div className={styles.label}>Email address <strong>*</strong></div>
                        <input type="email" name="email" placeholder="example@domain.com"/>
                    </div>
                    <div className={styles.groupval}>
                        <div className={styles.label}>Message <strong>*</strong></div>
                        <textarea name="message" placeholder="To Write"></textarea>
                    </div>
                    <div className={styles.groupbts}>
                        <button type="submit" className={styles.btn}>
                            <span
                                className={styles.animatedbutton}><span><em>S</em><em>e</em><em>n</em><em>d</em><em> </em><em>M</em><em>e</em><em>s</em><em>s</em><em>a</em><em>g</em><em>e</em></span></span>
                            <i className="icon fas fa-chevron-right"></i>
                        </button>
                    </div>
                </form>

            </div>
        </div>

    );
}

export default Contacts;
