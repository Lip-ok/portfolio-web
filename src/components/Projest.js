import styles from "./Project.module.css";
import React from "react";

function Project() {
    return (
        <div className={styles.project}>
            <div className={styles.photo}>
                <button>button</button>
            </div>
            <div className={styles.textarea}>
            <div> <span className={styles.text}>Lorem ipsum dolor sit amet.</span></div>
            <div> <span className={styles.text}>Lorem ipsum dolor sit amet.</span></div>
            </div>
        </div>
    );
}

export default Project;