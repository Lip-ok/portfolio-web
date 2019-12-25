import React from 'react';
import styles from './Footer.module.css';


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.insideBorder}>
                <span className={styles.span}>Alexander Viktorovich</span>
                <div className={styles.containerFooter}>
                  <a href="https://vk.com/alexander_lipen"  className={styles.link}><img className={styles.img} src='https://im.bloha.ru/2015/01/VK_com-logo_svg.png'/></a>
                  <a href="https://www.instagram.com/lip_ok/" className={styles.link}><img className={styles.img} src='https://itcomplex.kz/wp-content/uploads/2018/03/instagramm-clipart-svg-5.png'/> </a>
                  <a href="#" className={styles.link}></a>
                  <a href="#" className={styles.link}></a>
                </div>
              <span className={styles.span}>All rights reserved ©</span>
            </div>
        </div>
    );
}

export default Footer;
