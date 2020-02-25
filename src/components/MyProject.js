import React from 'react';
import styles from './MyProject.module.css';
import Project from "./Project";



function MyProject() {
    return (
        <div id="projects" className={styles.projectContainers}>

            <div className={styles.container}>
                <div  className={styles.header}>
                    <span className={styles.text}>My projects</span>
                </div>
                <div  className={styles.blocks}>
                    <Project img={"https://otvet.imgsmail.ru/download/38397444_f8d8bd8722862cfd0ba99bdbd8f2760c_800.png"} title='Dog game' link='https://github.com/Lip-ok/SN-project'/>
                    <Project img={"https://techrocks.ru/wp-content/uploads/2018/01/use-case-2-css.png"} title='Social network' link='https://github.com/Lip-ok/SN-project'/>
                    <Project img={"https://vignette.wikia.nocookie.net/science/images/b/b7/Html-source-code.png/revision/latest/scale-to-width-down/340?cb=20130801094623&path-prefix=ru"} title='ToDoList' link='https://github.com/Lip-ok/todolist'/>
                </div>
            </div>
        </div>
    );
}

export default MyProject;
