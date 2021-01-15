
import React from 'react';

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    "baseFont": "Segoe UI",
    "baseFontSize": "10",
    "baseFontColor": "#555555",
    "showZeroPlane": "0",
    "showBorder": "0",
    "bgColor": "#D5D5D5",
    "bgAlpha": "40",
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
          label: "2"
        },
        {
          label: "3"
        },
        {
          label: "4"
        },
        {
          label: "5"
        },
        {
          label: "6"
        },
        {
          label: "7"
        },
        {
          label: "8"
        },
        {
          label: "9"
        },
        {
          label: "10"
        },
        {
          label: "11"
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
              value: "-6"
            },
            {
              value: "-5"
            },
            {
              value: "-3"
            },
            {
              value: "-8"
            },
            {
              value: "-4"
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
            },
            {
              value: "5"
            },
            {
              value: "8"
            },
            {
              value: "6"
            },
            {
              value: "6"
            },
            {
              value: "4"
            }
          ]
        },
        {
          data: [
            {
              value: "16"
            },
            {
              value: "17"
            },
            {
              value: "8"
            },
            {
              value: "18"
            },
            {
              value: "13"
            },
            {
              value: "13"
            },
            {
              value: "23"
            },
            {
              value: "17"
            },
            {
              value: "13"
            },
            {
              value: "10"
            },
            {
              value: "18"
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
          value: ".3"
        },
        {
          value: ".8"
        },
        {
          value: "1.6"
        },
        {
          value: "1.2"
        },
        {
          value: "0.5"
        },
        {
          value: "0.2"
        },
        {
          value: ".6"
        },
        {
          value: "1.8"
        },
        {
          value: ".8"
        },
        {
          value: "1"
        },
        {
          value: "1.3"
        }
      ]
    }
  ]
};


const ProductionBarChart =()=>{

    return <ReactFusioncharts
      type="msstackedcolumn2dlinedy"
      width="100%"
      height= {window.matchMedia('(max-width: 45em)').matches ? '50%' : '60%'} 
      dataFormat="JSON"
      dataSource={dataSource}
    />
};

export default ProductionBarChart;
