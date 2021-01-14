
import React from 'react';

import styles from './Select.module.scss';

const Select =(props)=>{

    const {label, lebelTitle} = props;

return (
    <>
        {label && <label for='select'>{lebelTitle}</label>}

         <select name='select' id='select'>
          <option >Monthly Stats</option>

          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
    </>
)

};

export default Select;

