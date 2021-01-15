
import React from "react";

import colors from '../../utility-styles/index';
import styles from "./DashBoard.module.scss";

import HeadingPrimary from "../../components/HeadingPrimary/HeadingPrimary";

import StatsBox from "../../components/StatsBox/StatsBox";
import { ReactComponent as DataSVG } from "../../assets/svgs/database.svg";
import { ReactComponent as UserSVG } from "../../assets/svgs/user.svg";
import { ReactComponent as StacksSVG } from "../../assets/svgs/coin-stack.svg";
import { ReactComponent as MoreSVG } from "../../assets/svgs/more.svg";

import ChartBox from '../../components/ChartBox/ChartBox';
import ProductionBarChart from '../../components/Charts/ProductionBarChart';
import MapChart from '../../components/Charts/MapChart';
import SummaryChart from '../../components/Charts/SummaryChart';

const DashBoard = () => {

  return (
    <div>
      <HeadingPrimary>Enterprise Shiny Dashboards</HeadingPrimary>

      <div className={styles.statsWrapper}>
        <StatsBox
          detailStat="$ 3 237 234"
          detailName="total profit"
          detailPercent="+4.8%"
          Svg={DataSVG}
          bg={colors.blue}
        />

        <StatsBox
          detailStat="735"
          detailName="active users"
          detailPercent="+7.8%"
          Svg={UserSVG}
          bg={colors.green}
        />

        <StatsBox
          detailStat="354"
          detailName="new orders"
          detailPercent="+3.7%"
          Svg={StacksSVG}
          bg={colors.orange}
        />

        <StatsBox
          detailStat="12"
          detailName="open complaints"
          detailPercent="-6.5%"
          Svg={MoreSVG}
          bg={colors.red}
        />

      </div>

      <section className={styles.charts}>
        <ChartBox title='Prodction' hasIcons={true}>
          <ProductionBarChart />
        </ChartBox>

        <ChartBox title='sales revenue by country' hasIcons={true} >
          <MapChart />
        </ChartBox>

        <ChartBox title='summary' hasIcons={true} hasSelectLabel='range:' >
          <SummaryChart />
        </ChartBox>
      </section>

    </div>
  );
};

export default DashBoard;
