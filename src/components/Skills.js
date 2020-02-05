import React from 'react';
import styles from './Skills.module.css';
import BlockSkills from "./BlockSkills";


function Skills() {
  return (
    <div className={styles.blockSkills}>
        <div className={styles.skillsContainer}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    <h2 className={styles.headerTitle}>Мои скилы</h2>
                    <div className={styles.line}></div>
                </div>
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
