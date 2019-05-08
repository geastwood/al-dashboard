import * as React from 'react'
import * as Highcharts from 'highcharts/highmaps'
import HighchartsReact from 'highcharts-react-official'
require('highcharts/modules/map')(Highcharts)
const map = require('@highcharts/map-collection/countries/de/de-all.geo.json')
import BarChartIcon from '@material-ui/icons/BarChartOutlined'
import SettingsIcon from '@material-ui/icons/Settings'

export default class MapChart extends React.PureComponent {
  render() {
    return (
      <div>
        <div
          style={{
            height: 10,
            float: 'right',
            margin: 5,
          }}
        >
          <BarChartIcon />
          <SettingsIcon />
        </div>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType="mapChart"
          oneToOne
          options={{
            chart: {
              map,
              width: 600,
            },

            title: {
              text: '',
            },

            mapNavigation: {
              enabled: true,
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
                color: 'rgba(4, 56, 129, 0.3)',
                data: this.props.data,
              },
            ],
          }}
        />
      </div>
    )
  }
}
