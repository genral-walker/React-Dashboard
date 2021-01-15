
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

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    "showZeroPlane": "0",
    "showBorder": "0",
    "bgColor": "#D5D5D5",
    "bgAlpha": "100",
    "canvasbgColor": "#D5D5D5",
    "canvasBorderThickness": "0",
    "showAlternateHGridColor": "0",
    numdivlines: "8",
    adjustdiv: "0",
    syaxismaxvalue: "5",
    syaxisminvalue: "-3",
    yaxismaxvalue: "30",
    theme: "fusion",
    drawcustomlegendicon: "0",
    plottooltext: "$label, $seriesname: $dataValue",
    palettecolors: "#f0a51b,#D5D5D5,#5ea9d8",
  },
  categories: [
    {
      category: [
        {
          label: "1"
        },
        {
          label: "5"
        },
        {
          label: "10"
        },
        {
          label: "15"
        },
        {
          label: "25"
        },
        {
          label: "30"
        }
      ]
    }
  ],
  dataset: [
    {
      dataset: [
        {
          data: [
            {
              value: "-7"
            },
            {
              value: "-5"
            },
            {
              value: "-6"
            },
            {
              value: "-8"
            },
            {
              value: "-6"
            },
            {
              value: "-5"
            }
          ]
        },
        {
          data: [
            {
              value: "2"
            },
            {
              value: "5"
            },
            {
              value: "9"
            },
            {
              value: "7"
            },
            {
              value: "8"
            },
            {
              value: "4"
            }
          ]
        },
        {
          data: [
            {
              value: "22"
            },
            {
              value: "21"
            },
            {
              value: "13"
            },
            {
              value: "21"
            },
            {
              value: "10"
            },
            {
              value: "17"
            }
          ]
        }
      ]
    }
  ],
  lineset: [
    {
      showvalues: "0",
      color: "#FDCB50",
      anchorbgcolor: "#FDCB50",
      showanchors: "0",
      data: [
        {
          value: "1"
        },
        {
          value: "1"
        },
        {
          value: "3.2"
        },
        {
          value: "1.2"
        },
        {
          value: "0.5"
        },
        {
          value: "0.2"
        }
      ]
    }
  ]
};

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
          <ReactFusioncharts
            type="msstackedcolumn2dlinedy"
            width="100%"
            height="70%"
            dataFormat="JSON"
            dataSource={dataSource}
          />
        </ChartBox>
        <ChartBox title='sales revenue by country' />
        <ChartBox title='summary' hasIcons={true} />
      </section>

    </>
  );
};

export default Home;
