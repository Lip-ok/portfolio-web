import React from 'react';
import styles from './BlockSkills.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function BlockSkills(props) {
    return (
        <div className={styles.skill}>
            <div className={styles.head}>
                <div className={styles.photo}>
                    <FontAwesomeIcon icon={props.icon} size='5x'/>
                </div>
                <h4 className={styles.name}>{props.title}</h4>
            </div>
            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    );
}

export default BlockSkills;
