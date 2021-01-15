
import React from 'react';

import styles from './Btn.module.scss';


const Btn =({children, Svg})=>{

    return (
        <button className={styles.btn}>
            <span>{children}</span>
            <span className={styles.icon}>{<Svg />}</span>
        </button>
    )
};

export default Btn;

