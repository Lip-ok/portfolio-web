import React from 'react';
import styles from './Skills.module.css';
import BlockSkills from "./BlockSkills";


function Skills() {
  return (
    <div className={styles.blockSkills}>
        <div className={styles.skillsContainer}>
            <div className={styles.header}>
                <span className={styles.text}>Skills</span>
            </div>
            <div className={styles.skills}>
            <BlockSkills/>
            <BlockSkills/>
            <BlockSkills/>
            </div>
        </div>
    </div>
  );
}

export default Skills;
