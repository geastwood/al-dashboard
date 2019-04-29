import * as React from 'react'
import Highcharts from 'highcharts'

export default class Chart extends React.PureComponent {
  componentDidMount() {
    window.chart = Highcharts.chart('chart', {
      chart: {
        type: 'column',
      },
      title: {
        text: 'AZ NLQ - Have a conversation with your data.',
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        title: {
          text: 'Product count',
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
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat:
          '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> products use this coverage<br/>',
      },

      series: [
        {
          name: 'Browsers',
          colorByPoint: true,
          data: this.props.data,
        },
      ],
      drilldown: {
        series: [
          {
            name: 'Hausrat',
            id: 'Hausrat',
            data: [
              ['Haushaltsversicherung', 20],
              ['Hausrat / Junge Leute / Familienversicherung', 12],
              ['Private Sachversicherung', 12],
              ['Allgemeine Haftpflicht / Erweiterte Haushaltversicherung', 2],
            ],
          },
          {
            name: 'Opera',
            id: 'Opera',
            data: [['v50.0', 0.96], ['v49.0', 0.82], ['v12.1', 0.14]],
          },
        ],
      },
    })
  }
  render() {
    return <div id="chart" />
  }
}
