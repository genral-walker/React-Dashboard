
import React from "react";
import colors from '../../static';

import styles from "./Home.module.scss";

import HeadingPrimary from "../../components/HeadingPrimary/HeadingPrimary";

import StatsBox from "../../components/StatsBox/StatsBox";
import { ReactComponent as DataSVG } from "../../assets/svgs/database.svg";
import { ReactComponent as UserSVG } from "../../assets/svgs/user.svg";
import { ReactComponent as StacksSVG } from "../../assets/svgs/coin-stack.svg";
import { ReactComponent as MoreSVG } from "../../assets/svgs/more.svg";

import ChartBox from '../../components/ChartBox/ChartBox';


const Home = () => {

  return (
    <>
      <HeadingPrimary>Enterprise Shiny Dashboards</HeadingPrimary>

      <div className={styles.statsWrapper}>
        <StatsBox
          detailStat="$ 3 237 234"
          detailName="total profit"
          detailPercent="+4.8%"
          Svg={DataSVG}
          bg= {colors.blue}
        />

        <StatsBox
          detailStat="735"
          detailName="active users"
          detailPercent="+7.8%"
          Svg={UserSVG}
          bg= {colors.green}
        />

        <StatsBox
          detailStat="354"
          detailName="new orders"
          detailPercent="+3.7%"
          Svg={StacksSVG}
          bg= {colors.orange}
        />
        
        <StatsBox
          detailStat="12"
          detailName="open complaints"
          detailPercent="-6.5%"
          Svg={MoreSVG}
          bg= {colors.red}
        />
    
      </div>

      <section className={styles.charts}>
      <ChartBox title='Prodction' hasIcons={true} />
      <ChartBox title='sales revenue by country' />
      <ChartBox title='summary'  hasIcons={true} />
      </section>

    </>
  );
};

export default Home;
