
import React from 'react';

import styles from './HeadingPrimary.module.scss';

const HeadingPrimary =({children})=>{

    return (
        <h1 className={styles.h1}>{children}</h1>
    )
}

export default HeadingPrimary;
