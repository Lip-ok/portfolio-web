import React from 'react';
import styles from './MyProject.module.css';


function MyProject() {
    return (
        <div className={styles.myProject}>
            <div className={styles.containerProject}>
                <div className={styles.block}>
                    <div className={styles.photo}></div>
                    <div className={styles.textarea}>123</div>
                </div>
            </div>
        </div>
    );
}

export default MyProject;
