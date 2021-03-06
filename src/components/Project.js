import styles from "./Project.module.css";
import React from "react";

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.photo}>
                <a href={props.link}>
                    <img className={styles.img} src={props.img}/>
                    <div className={styles.block}>
                        <span >Look at github</span>
                        <div className={styles.shadow}></div>
                    </div>
                </a>
            </div>
            <div className={styles.textarea}>
            <div> <span className={styles.text}>{props.title}</span></div>
            </div>
        </div>
    );
}

export default Project;