import React from 'react';
import styles from './NavMenu.module.css';
import {Link, animateScroll as scroll} from "react-scroll";


function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <a className={styles.active}><Link to='main' spy={true}
                                               activeClass={styles.active}
                                               smooth={true}
                                               offset={-70}
                                               duration={500} className={styles.button}>Main</Link></a>
            <a className={styles.active}><Link to='skills' spy={true}
                                               activeClass={styles.active}
                                               smooth={true}
                                               offset={-70}
                                               duration={500} className={styles.button}>Skills</Link></a>
            <a className={styles.active}><Link to='projects' spy={true}
                                               activeClass={styles.active}
                                               smooth={true}
                                               offset={-70}
                                               duration={500} className={styles.button}>Projects</Link></a>
            <a className={styles.active}><Link to='contacts' spy={true}
                                               activeClass={styles.active}
                                               smooth={true}
                                               offset={-70}
                                               duration={500} className={styles.button}>Contacts</Link></a>

        </div>
    );
}

export default NavMenu;
