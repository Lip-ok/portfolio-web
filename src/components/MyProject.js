import React from 'react';
import styles from './MyProject.module.css';
import Project from "./Project";


function MyProject() {
    return (
        <div id='projects' className={styles.projectContainers}>

            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.text}>My projects</span>
                </div>
                <div className={styles.blocks}>
                    <Project title='Dog game' link='https://github.com/Lip-ok/SN-project'/>
                    <Project title='Social network' link='https://github.com/Lip-ok/SN-project'/>
                    <Project title='Counter' link='https://github.com/Lip-ok/counter-test/tree/master/test'/>
                </div>
            </div>
        </div>
    );
}

export default MyProject;
