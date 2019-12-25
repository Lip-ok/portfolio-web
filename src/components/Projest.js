import styles from "./Project.module.css";
import React from "react";

function Project() {
    return (
        <div className={styles.block1}>
            <div className={styles.photo}>
                <button>button</button>
            </div>
            <span className={styles.text}>Lorem ipsum dolor sit amet. </span>
            <div className={styles.textarea}>Lorem ipsum dolor sit amet.</div>
        </div>
    );
}

export default Project;