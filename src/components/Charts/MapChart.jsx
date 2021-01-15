

import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import FusionMaps from 'fusioncharts/maps/es/fusioncharts.world';
import World from 'fusioncharts/fusioncharts.maps';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, FusionMaps, World, FusionTheme);


const dataset = [{
  "id": "NA",
  "value": ".82",
  "showLabel": "1"
}, {
  "id": "SA",
  "value": "2.04",
  "showLabel": "1"
}, {
  "id": "AS",
  "value": "1.78",
  "showLabel": "1"
}, {
  "id": "EU",
  "value": ".40",
  "showLabel": "1"
}, {
  "id": "AF",
  "value": "2.58",
  "showLabel": "1"
}, {
  "id": "AU",
  "value": "1.30",
  "showLabel": "1"
}];

const colorrange = {
  "minvalue": "0",
  "code": "#FFE0B2",
  "gradient": "1",
  "color": [{
    "minvalue": "0.5",
    "maxvalue": "1.0",
    "color": "#FFD74D"
  }, {
    "minvalue": "1.0",
    "maxvalue": "2.0",
    "color": "#FB8C00"
  }, {
    "minvalue": "2.0",
    "maxvalue": "3.0",
    "color": "#E65100"
  }]
};

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: 'world', 
  width: '100%',
  height: `${window.matchMedia('(max-width: 45em)').matches ? '40%' : '75%'}`, 
  dataFormat: 'json',
  dataSource: {
    // Map Configuration
    "chart": {
      "bgColor": "#D5D5D5",
      "bgAlpha": "40",
      "numbersuffix": "%",
      "entityFillHoverColor": "#FFF9C4",
      "theme": "fusion"
    },
    // Aesthetics; ranges synced with the slider  
    "colorrange": colorrange,
    // Source data as JSON --> id represents countries of the world.
    "data": dataset
  }
};



const MapChart = () => {
  return <ReactFC {...chartConfigs} />
}

export default MapChart;
