
import React from 'react';

import styles from './ChartBox.module.scss';

import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';
import { ReactComponent as ReloadSvg } from '../../assets/svgs/loading.svg';
import { ReactComponent as CancelSvg } from '../../assets/svgs/cancel.svg';
import { ReactComponent as ArrowDownSvg } from '../../assets/svgs/arrowD.svg';

import Select from '../Select/Select';

import Btn from '../Btn/Btn';
import { ReactComponent as ExportSvg } from '../../assets/svgs/download.svg';
import { ReactComponent as PrintnSvg } from '../../assets/svgs/printer.svg';



const ChartBox = props => {

    const { title, hasIcons, children, hasSelectLabel} = props;

    return (

        <div className={styles.box}>

            <div className={styles.titleBox}>

                <HeadingSecondary>{title}</HeadingSecondary>

                {
                    hasIcons &&
                    <div className={styles.icons}>
                        <ReloadSvg />
                        <CancelSvg />
                        <ArrowDownSvg />
                    </div>

                }
            </div>

            <div className={styles.charts}>
            {/* CHART ELEMENTS */}
                {children}
            </div>


            <div className={styles.buttons}>

                <div>
                <Select lebelTitle={hasSelectLabel}/>
                </div>

                <div className={styles.btns}>
                <Btn Svg={ExportSvg}> Export </Btn>
                <Btn Svg={PrintnSvg}> Print </Btn>
                </div>

            </div>

        </div>
    )
};

export default ChartBox;


