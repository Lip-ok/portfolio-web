import React from 'react';
import styles from './Footer.module.css';


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.insideBorder}>
                <span className={styles.text}>Alexander Viktorovich</span>
                <div className={styles.containerFooter}>
                  <a href="https://vk.com/alexander_lipen"  className={styles.link}>1</a>
                  <a href="https://www.instagram.com/lip_ok/" className={styles.link}>2</a>
                  <a href="#" className={styles.link}>3</a>
                  <a href="#" className={styles.link}>4</a>
                </div>
              <span className={styles.text}>All rights reserved ©</span>
            </div>
        </div>
    );
}

export default Footer;
