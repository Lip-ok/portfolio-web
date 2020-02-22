import React from 'react';
import styles from './Footer.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Link = (props)=>{
    return(
        <div className={styles.link}>
            <a href={props.href}><FontAwesomeIcon icon={props.icon} size='3x'/></a>
        </div>
    )
}
export default Link;