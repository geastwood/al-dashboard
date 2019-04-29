import * as React from 'react'
import Container from '../presentational/Container'
import {
  Input,
  Typography,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'
import logo from '../../asset/logo.png'
import Footer from '../presentational/Footer'
import Chart from '../layout/Chart'
import { chart } from 'highcharts'
const rawData = [
  {
    name: 'Leben',
    y: 31,
    drilldown: 'Leben',
  },
  {
    name: 'KFZ-Haftpflicht',
    y: 17,
    drilldown: 'KFZ-Haftpflicht',
  },
  {
    name: 'Hausrat',
    y: 4,
    drilldown: 'Hausrat',
  },
  {
    name: 'Reisekranken',
    y: 4,
    drilldown: 'Reisekranken',
  },
  {
    name: 'Heilkostenvollversicherung',
    y: 1,
    drilldown: 'Heilkostenvollversicherung',
  },
  {
    name: 'Pflegepflichtversicherung',
    y: 1,
    drilldown: 'Pflegepflichtversicherung',
  },
  {
    name: 'Immobilien-RS selbstgenutzte Einheiten',
    y: 1,
    drilldown: 'Immobilien-RS selbstgenutzte Einheiten',
  },
  {
    name: 'Verkehrs-Rechtsschutz',
    y: 1,
    drilldown: 'Verkehrs-Rechtsschutz',
  },
  {
    name: 'Kranken-Zusatzversicherung',
    y: 1,
    drilldown: 'Kranken-Zusatzversicherung',
  },
  {
    name: 'Vermögenshaftpflicht',
    y: 1,
    drilldown: 'Vermögenshaftpflicht',
  },
]
export default class Home extends React.PureComponent {
  state = {
    showChart: false,
    data: rawData,
    unchecked: [],
  }

  handleChange = event => {
    const { value } = event.target
    if (
      value.includes('average') &&
      value.includes('claim') &&
      value.includes('munich')
    ) {
      this.setState({ showChart: true })
    }
  }
  handleSelect = name => event => {
    const { checked } = event.target
    if (!checked) {
      this.setState({
        unchecked: [...this.state.unchecked, name],
      })
    } else {
      this.setState({
        unchecked: this.state.unchecked.filter(unchecked => unchecked !== name),
      })
    }
  }
  render() {
    const categories = this.state.data.map(d => d.name)

    console.log(this.state.unchecked)
    const filterData = this.state.data.filter(
      d => !this.state.unchecked.includes(d.name)
    )
    console.log(filterData.length)

    return (
      <Container>
        <div style={{ height: '2rem', padding: '1rem' }}>
          <Typography variant="h4">Appollo Q&A</Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItem: 'center',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              alignSelf: 'center',
              width: '38rem',
            }}
          >
            <div style={{ paddingBottom: '3rem' }}>
              <img src={logo} alt="" width="100" />
            </div>
            <Input
              placeholder="Start typing..."
              fullWidth
              onChange={this.handleChange}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
            {this.state.showChart ? (
              <div
                style={{
                  marginTop: 20,
                  display: 'flex',
                  flex: 1,
                  justifyContent: 'space-between',
                }}
              >
                <Chart data={filterData} />
              </div>
            ) : null}
          </div>
        </div>
        <Footer>
          <p>2018 Allianz</p>
        </Footer>
      </Container>
    )
  }
}
