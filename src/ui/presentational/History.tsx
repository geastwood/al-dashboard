import * as React from 'react'
import { HistoryType } from '../../store/reducer/history'
import { List, ListItem } from '@material-ui/core'

type PropTypes = {
  data: HistoryType[]
}

export default class History extends React.PureComponent<PropTypes> {
  render() {
    return (
      <List>
        {this.props.data.map(history => (
          <ListItem key={history.query}>{history.query}</ListItem>
        ))}
      </List>
    )
  }
}
