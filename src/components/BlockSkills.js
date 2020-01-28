import React from 'react';
import styles from './BlockSkills.module.css';


function BlockSkills() {
  return (

          <div className={styles.skill}>
                <div className={styles.photo}></div>
              <div className={styles.textarea}>
                  <span className={styles.text} > Lorem </span>
              </div>
              <div className={styles.textarea}>
                  <span className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem cum debitis dignissimos eius</span>
              </div>
          </div>

  );
}

export default BlockSkills;
