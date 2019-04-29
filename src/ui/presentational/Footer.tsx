import * as React from 'react'

type PropTypes = {
  children: React.ReactNode
}
export default class Footer extends React.PureComponent<PropTypes> {
  render() {
    return (
      <div style={{ height: '2rem', padding: '1rem', textAlign: 'center' }}>
        {this.props.children}
      </div>
    )
  }
}
