import React from 'react';
import styles from './Main.module.css';



function Main() {
  return (
    <div id="main" className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <span className={styles.hello}>Hello!</span>
          <span>My name is <span>Alexander</span></span>
          <h1>I'm front-end developer</h1>
        </div>
        <div className={styles.imageHover}>
          <div className={styles.photo}>
            <div className={styles.image}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
