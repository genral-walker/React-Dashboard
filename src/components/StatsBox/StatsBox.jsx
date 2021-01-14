
import React from "react";
import styles from "./StatsBox.module.scss";

const StatsBox = (props) => {
  const { detailStat, detailName, detailPercent, Svg, bg } = props;
 
  return (
    <div className={styles.box}>
      <div className={styles.details}>
        <h3>{detailStat}</h3>
        <p>
          <span>{detailName}</span> 
          <span className={detailPercent.includes('+') ? styles.spanColorGreen : styles.spanColorRed}>{detailPercent}</span>
        </p>
      </div>

      <div className={styles.monthlyStats}>
        <select>
          <option>Monthly Stats</option>
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

        <div className={styles.icon} style={{ background: `${bg}` }}>
          {Svg && <Svg className={styles.svg} />}
        </div>
      </div>
    </div>
  );
};

export default StatsBox;
