import React from 'react';
import styles from './Skills.module.css';
import BlockSkills from "./BlockSkills";


function Skills() {
  return (
    <div className={styles.skills}>
        <div className={styles.containerSkills}>
            <div className={styles.heder}>Заголовок</div>
            <div className={styles.blockskills}>
            <BlockSkills/>
            <BlockSkills/>
            <BlockSkills/>
            </div>
        </div>
    </div>
  );
}

export default Skills;
