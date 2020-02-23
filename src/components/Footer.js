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
                <span className={styles.text}>Lipen' Alexander</span>
                <div className={styles.containerFooter}>
                  <Link icon={['fab', 'vk']} href={"https://vk.com/alexander_lipen"}/>
                  <Link icon={['fab', 'instagram']} href={"https://www.instagram.com/lip_ok/"}/>
                  <Link icon={['fab', 'linkedin-in']} href={"https://www.linkedin.com/in/alexander-lipen-2895311a2/"}/>
                  <Link icon={['fab', 'telegram-plane']} href={"https://t.me/Alexander_Lipen"}/>
                </div>
              <span className={styles.text}>© All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer;
