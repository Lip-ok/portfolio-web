import React from 'react';
import styles from './MyProject.module.css';


function MyProject() {
    return (


        <container className={styles.container}>
            <div className={styles.containerProject}>
                <div className={styles.header}>Заголовок</div>
                <div className={styles.blocks}>
                    <div className={styles.block1}>
                        <div className={styles.photo}>
                            <button className={styles.button}>button</button>
                        </div>
                        <span className={styles.text}>Lorem ipsum dolor sit amet. </span>
                        <div className={styles.textarea}>Lorem ipsum dolor sit amet.</div>
                    </div>
                    <div className={styles.block1}>
                        <div className={styles.photo}>
                            <button className={styles.button}>button</button>
                        </div>
                        <span className={styles.text}>Lorem ipsum dolor sit amet. </span>
                        <div className={styles.textarea}>Lorem ipsum dolor sit amet.</div>
                    </div>

                </div>
            </div>
        </container>

    );
}

export default MyProject;
