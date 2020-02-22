import React from 'react';
import styles from './Footer.module.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import Link from "./Link";;

library.add(fab)

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.insideBorder}>
                <span className={styles.text}>Alexander Viktorovich</span>
                <div className={styles.containerFooter}>
                  <Link icon={['fab', 'vk']} href={"https://vk.com/alexander_lipen"}/>
                  <Link icon={['fab', 'instagram']} href={"https://www.instagram.com/lip_ok/"}/>
                  <Link icon={['fab', 'facebook-f']} href={"#"}/>
                  <Link icon={['fab', 'telegram-plane']} href={"#"}/>
                </div>
              <span className={styles.text}>All rights reserved ©</span>
            </div>
        </div>
    );
}

export default Footer;
