import React from 'react';
import styles from './MyProject.module.css';
import Project from "./Projest";


function MyProject() {
    return (
        <container className={styles.projectContainers}>
            <div className={styles.container}>
                <div className={styles.header}>Заголовок</div>
                <div className={styles.blocks}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </container>
    );
}

export default MyProject;
