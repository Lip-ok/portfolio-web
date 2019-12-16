import React from 'react';
import styles from './Header.module.css';
import NavMenu from './NavMenu'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <NavMenu />  
        </div>
      </div>
    </div>
  );
}

export default Header;
