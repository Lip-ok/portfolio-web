import React from 'react';
import styles from './BlockSkills.module.css';


function BlockSkills() {
  return (

          <div className={styles.skill}>
                <div className={styles.photo}></div>
              <div className={styles.text}>React</div>
              <div className={styles.textarea}>123</div>
          </div>

  );
}

export default BlockSkills;
