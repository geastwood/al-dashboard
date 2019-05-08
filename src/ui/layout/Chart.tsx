import * as React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class Chart extends React.PureComponent {
  render() {
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'column',
            width: 500,
            height: 500 * 1.618,
          },
          title: {
            text: '',
          },
          subtitle: {
            text: '',
          },
          xAxis: {
            type: 'category',
          },
          yAxis: {
            title: {
              text: 'count',
            },
          },
          legend: {
            enabled: false,
          },
          plotOptions: {
            series: {
              borderWidth: 0,
              dataLabels: {
                enabled: true,
                format: '{point.y}',
              },
            },
          },

          tooltip: {
            headerFormat:
              '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat:
              '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>',
          },

          series: [
            {
              colorByPoint: true,
              data: this.props.data,
            },
          ],
        }}
      />
    )
  }
}
