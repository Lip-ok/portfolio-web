import React from 'react';
import styles from './MyProject.module.css';
import Project from "./Project";



function MyProject() {
    return (
        <div id='projects' className={styles.projectContainers}>

            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.text}>My projects</span>
                </div>
                <div className={styles.blocks}>
                    <Project img={"https://2.downloader.disk.yandex.by/preview/fe2442f81e49d4def9460e05b954dfc0955dd6f33a956f51361bc1f358364ca0/inf/lnmS5G1rYAh3Cr2FNdcTwEEqmUurfLn5zbIQT4VoeWcLoXBYGouN23T-d0_V5uiXoHASlLAu6TrRUm9FzzE6rQ%3D%3D?uid=348254188&filename=Screenshot_2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=348254188&tknv=v2&size=1903x937"} title='Dog game' link='https://github.com/Lip-ok/SN-project'/>
                    <Project img={"https://3.downloader.disk.yandex.by/preview/3587327d1a70966229338623306b6105e35f0a0149d25a007306ce60029796b4/inf/m6Ltq1kwdRFC-wJcmaruEEEqmUurfLn5zbIQT4VoeWeQv09CUDI-iwy89-rSx2lq90oJszaCP8Dbi7Jo9flRqg%3D%3D?uid=348254188&filename=Screenshot_3.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=348254188&tknv=v2&size=1903x937"} title='Social network' link='https://github.com/Lip-ok/SN-project'/>
                    <Project img={"https://2.downloader.disk.yandex.by/preview/ec371724a1f0e18d03fcebe0de789a340d01998ca83e34813d07de08362d4ed6/inf/qyZOduxJyOGZs37VvfZqMEEqmUurfLn5zbIQT4VoeWf76LUh31_R4FkFe09pSDASp-ED9XPu6rbny-k01Tqcag%3D%3D?uid=348254188&filename=Screenshot_1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=348254188&tknv=v2&size=1903x937"} title='ToDoList' link='https://github.com/Lip-ok/todolist'/>
                </div>
            </div>
        </div>
    );
}

export default MyProject;
