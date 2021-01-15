
import React from 'react';

import styles from './ChartBox.module.scss';

import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';
import { ReactComponent as ReloadSvg } from '../../assets/svgs/loading.svg';
import { ReactComponent as CancelSvg } from '../../assets/svgs/cancel.svg';
import { ReactComponent as ArrowDownSvg } from '../../assets/svgs/arrowD.svg';


const ChartBox = props => {

    const { title, hasIcons, children } = props;

    const svgs = <> <ReloadSvg /> <CancelSvg /> <ArrowDownSvg /> </>;

    return (

        <div className={styles.box}>
            <div className={styles.titleBox}>

                <HeadingSecondary>{title}</HeadingSecondary>

                {hasIcons && <div className={styles.icons}> {svgs} </div>}
            </div>

        {/* CHART ELEMENT */}
           {children}
        </div>
    )
};

export default ChartBox;


