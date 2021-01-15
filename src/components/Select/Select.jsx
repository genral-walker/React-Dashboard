
import React from 'react';

import styles from './Select.module.scss';

const Select = (props) => {

    const { lebelTitle } = props;

    return (
        <>
            {lebelTitle && <label for='select'>{lebelTitle}</label>}

            {
                lebelTitle ?
                    <select style={{marginLeft: '.5rem'}} className={styles.select} name='select' id='select'>
                    <option value="1 month">1 month</option>
                    <option value="2 month">2 month</option>
                    <option value="3 month">3 month</option>
                    <option value="4 month">4 month</option>
                    <option value="5 month">5 month</option>
                    <option value="6 month">6 month</option>
                    <option value="7 month">7 month</option>
                    <option value="8 month">8 month</option>
                    <option value="9 month">9 month</option>
                    <option value="10 month">10 month</option>
                    <option value="11 month">11 month</option>
                    <option value="12 month">12 month</option>
                    </select> 
                    
                    :

                    <select className={styles.select} name='select' id='select'>
                        <option value="June 2018">June 2018</option>
                        <option value="July 2018">July 2018</option>
                        <option value="August 2018">August 2018</option>
                        <option value="September 2018">September 2018</option>
                        <option value="November 2018">November 2018</option>
                        <option value="December 2018">December 2018</option>
                        <option value="January 2019">January 2019</option>
                        <option value="February 2019">February 2019</option>
                        <option value="March 2019">March 2019</option>
                        <option value="April 2019">April 2019</option>
                        <option value="May 2019">May 2019</option>
                        <option value="June 2019">June 2019</option>
                        <option value="july 2019">july 2019</option>
                    </select>

            }

        </>
    )

};

export default Select;

