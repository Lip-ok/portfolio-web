import styles from "./Project.module.css";
import React from "react";

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.photo}>
                <a href={props.link}>
                    view
                </a>
            </div>
            <div className={styles.textarea}>
            <div> <span className={styles.text}>{props.title}</span></div>
            </div>
        </div>
    );
}

export default Project;