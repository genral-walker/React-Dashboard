
import React from 'react';

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    "baseFont": "Segoe 12",
    "baseFontSize": "11",
    "baseFontColor": "#808080",
    "bgColor": "#D5D5D5",
    "bgAlpha": "40",
    palettecolors: "#D5D5D5",
    plotgradientcolor: "#f5f5f5",
    theme: "fusion",
    yaxismaxvalue: "30",
    numdivlines: "0",
    showlegend: "0",
    showvalues: "0",
    showsum: "1"
  },
  categories: [
    {
      category: [
        {
          label: null
        },
        {
          label: null
        },
        {
          label: null
        },
        {
          label: null
        },
      ]
    }
  ],
  dataset: [
    {
      seriesname: "2016",
      data: [
        {
          value: "20"
        },
        {
          value: "13"
        },
        {
          value: "19"
        },
        {
          value: "5"
        },
      ]
    },
    {
      seriesname: "2017",
      data: [
        {
          value: "2",
          color: "#5EA9D8"
        },
        {
          value: "5",
          color: "#9FD85E"
        },
        {
          value: "6",
          color: "#f0A51B"
        },
        {
          value: "3",
          color: "#FF3D5E"
        },
      ]
    }
  ],
 
};

const SummaryChart =()=> {
    return (
      <ReactFusioncharts
        type="stackedbar2d"
        width="100%"
        height= {window.matchMedia('(max-width: 45em)').matches ? '9%' : '14%'}
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }

  export default SummaryChart;

