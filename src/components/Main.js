import React from 'react';
import styles from './Main.module.css';



function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <span className={styles.mainSpan}>Привет!</span>
          <span className={styles.mainSpan}>Меня зовут Липень А.В.</span>
          <span className={styles.mainSpan}>Я front-end разработчик</span>
        </div>
        <div className={styles.photo}>
          <img src='' />
        </div>
      </div>
    </div>
  );
}

export default Main;
