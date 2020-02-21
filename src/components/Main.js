import React from 'react';
import styles from './Main.module.css';



function Main() {
  return (
    <div className={styles.main}>
    {/*  <div className={styles.oboi}>*/}
    {/*    <img src='https://99px.ru/sstorage/53/2010/03/tmb_612_6010.jpg'/>*/}
    {/*</div>*/}
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
