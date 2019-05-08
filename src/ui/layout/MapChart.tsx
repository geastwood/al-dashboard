import * as React from 'react'
import * as Highcharts from 'highcharts/highmaps'
import HighchartsReact from 'highcharts-react-official'
require('highcharts/modules/map')(Highcharts)
const map = require('@highcharts/map-collection/countries/de/de-all.geo.json')

export default class MapChart extends React.PureComponent {
  render() {
    return (
      <HighchartsReact
        highcharts={Highcharts}
        constructorType="mapChart"
        oneToOne
        options={{
          chart: {
            map,
            width: 500,
            height: 500 * 1.618,
          },

          title: {
            text: '',
          },

          mapNavigation: {
            enabled: false,
          },

          tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.name}</b><br>value: {point.z}',
          },

          series: [
            {
              // Use the gb-all map with no data as a basemap
              name: 'Basemap',
              borderColor: '#A0A0A0',
              nullColor: 'rgba(200, 200, 200, 0.3)',
              showInLegend: false,
            },
            {
              name: 'Separators',
              type: 'mapline',
              nullColor: '#707070',
              showInLegend: false,
              enableMouseTracking: true,
            },
            {
              // Specify points using lat/lon
              type: 'mapbubble',
              clip: false,
              name: 'Cities',
              color: 'steelblue',
              data: this.props.data,
            },
          ],
        }}
      />
    )
  }
}
