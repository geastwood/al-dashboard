import * as React from 'react'
import { Input } from '@material-ui/core'

export default class Search extends React.PureComponent {
  render() {
    return (
      <Input
        placeholder="Start typing..."
        fullWidth
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    )
  }
}
