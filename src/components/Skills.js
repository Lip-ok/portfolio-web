import React from 'react';
import styles from './Skills.module.css';
import BlockSkills from "./BlockSkills";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";

library.add(fab)

function Skills() {
  return (
    <div className={styles.blockSkills}>
        <div className={styles.skillsContainer}>
            <div className={styles.header}>
                <div >
                    <h2 className={styles.headerTitle}>My skills</h2>
                </div>
            </div>
            <div className={styles.skills}>
            <BlockSkills icon={['fab', 'html5']} title='HTML' text='Work with HTML elements'/>
            <BlockSkills icon={['fab', 'css3-alt']} title='CSS' text='Quality setting styles with CSS'/>
            <BlockSkills icon={['fab', 'js-square']} title='JS' text='Good javascript skills'/>
            <BlockSkills icon={['fab', 'react']} title='React' text='Build React Web Applications'/>
            </div>
        </div>
    </div>
  );
}

export default Skills;
