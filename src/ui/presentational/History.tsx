import * as React from 'react'
import { HistoryType } from '../../store/reducer/history'
import { List, ListItem, Typography, Chip } from '@material-ui/core'
import { connect } from 'react-redux'
import { getHistory } from '../../store/getter'

type PropTypes = {
  data: HistoryType[]
  onClick: any
}

class History extends React.PureComponent<PropTypes> {
  render() {
    return (
      <div>
        <Typography variant="h6">History:</Typography>
        <List>
          {this.props.data.map(history => (
            <ListItem key={history.query}>
              <Chip
                label={history.query}
                variant="outlined"
                onClick={() => this.props.onClick(history)}
              />
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

export default connect(getHistory)(History)
