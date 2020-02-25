import React from 'react';
import styles from './NavMenu.module.css';
import {Link, animateScroll as scroll} from "react-scroll";


function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <a ><Link to='main' spy={true}
                                               activeClass={styles.active}
                                               smooth={true}
                                               offset={1}
                                               duration={500} className={styles.button}>Main</Link></a>
            <a ><Link to='skills' spy={true}
                                               activeClass={styles.active}
                                               smooth={true}
                                               offset={1}
                                               duration={500} className={styles.button}>Skills</Link></a>
            <a ><Link to='projects' spy={true}
                                               activeClass={styles.active}
                                               smooth={true}
                                               offset={1}
                                               duration={500} className={styles.button}>Projects</Link></a>
            <a ><Link to='contactsId' spy={true}
                                               activeClass={styles.active}
                                               smooth={true}
                                               offset={1}
                                               duration={500} className={styles.button}>Contacts</Link></a>

        </div>
    );
}

export default NavMenu;
