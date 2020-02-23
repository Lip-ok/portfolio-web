import React from 'react';
import styles from './NavMenu.module.css';


function NavMenu() {
  return (
    <div className={styles.navMenu}>
      <a href="#main" >Main</a>
      <a href="#skills" >Skills</a>
      <a href="#project" >Projects</a>
      <a href="#contacts" >Contacts</a>
    </div>
  );
}

export default NavMenu;
