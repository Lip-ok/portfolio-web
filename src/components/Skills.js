import React from 'react';
import styles from './Skills.module.css';
import BlockSkills from "./BlockSkills";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";

library.add(fab)

function Skills() {
  return (
    <div id='skills' className={styles.blockSkills}>
        <div className={styles.skillsContainer}>
            <div className={styles.header}>
                <div className={styles.h2Hover}>
                    <h2 className={styles.headerTitle}>My skills</h2>
                </div>
            </div>
            <div className={styles.skills}>
            <BlockSkills icon={['fab', 'html5']} title='HTML' text='The correct use of block names with tags to create semantic layout. Using html to create any blocks on the site.'/>
            <BlockSkills icon={['fab', 'css3-alt']} title='CSS' text='The use of CSS to style the site, also cross-browser layout, semantic layout, Material UI. Using a variety of libraries and animations.'/>
            <BlockSkills icon={['fab', 'js-square']} title='JavaScript' text='The correct use of block names with tags to create semantic layout. Using html to create any blocks on the site.'/>
            <BlockSkills icon={['fab', 'react']} title='React' text='Using the React.js library to write applications. FLUX Cycle, HOC, REST API, react-redux, AJAX, axios. '/>
            </div>
        </div>
    </div>
  );
}

export default Skills;
