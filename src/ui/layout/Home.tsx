import * as React from 'react'
import Container from '../presentational/Container'
import { Input, Typography } from '@material-ui/core'
import logo from '../../asset/logo.png'
import Footer from '../presentational/Footer'
import MapChart from './MapChart'
import * as uiActions from '../action'
import { connect } from 'react-redux'
import { getForHomeScreen } from '../../store/getter'
import Chart from './Chart'
import { HistoryType } from '../../store/reducer/history'
import History from '../presentational/History'

type PropTypes = {
  history: HistoryType[]
  current: {} | null
  onQuery: (query: string) => ReturnType<typeof uiActions.query>
}

type StateTypes = {
  showChart: boolean
  current: {} | null
}

class Home extends React.PureComponent<PropTypes, StateTypes> {
  handleOnSubmit = event => {
    if (event.which === 13) {
      const { value } = event.target

      this.props.onQuery(value)
    }
  }

  renderChart = () => {
    const { data, charttype } = this.props.current
    if (charttype === 'bar') {
      const formattedData = data.map(d => ({
        name: d.label,
        y: d.count,
      }))
      return <Chart data={formattedData} />
    } else {
      const formattedData = data.map(d => ({
        ...d,
        name: d.city,
      }))
      console.log('fei', formattedData)
      return <MapChart data={formattedData} />
    }
  }

  render() {
    return (
      <Container>
        <div style={{ height: '2rem', padding: '1rem' }}>
          <p
            style={{
              fontFamily: 'Helvetica',
              fontWeight: '500',
              fontSize: 24,
            }}
          >
            AZ NLQ - Have a conversation with your data.
          </p>
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
              inputProps={{
                'aria-label': 'Description',
              }}
              onKeyUp={this.handleOnSubmit}
            />
            {this.props.current !== null ? this.renderChart() : null}
          </div>
        </div>
        <Footer>
          <p style={{ fontFamily: 'Helvetica' }}>2018 Allianz</p>
        </Footer>
      </Container>
    )
  }
}

export default connect(
  getForHomeScreen,
  { onQuery: uiActions.query }
)(Home)
