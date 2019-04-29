import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import createStore from './store'
import rootSaga from './saga'
import Home from './ui/layout/Home'

const { store, persistor } = createStore(rootSaga)

class Root extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Route path="/" component={Home} />
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}

render(<Root />, document.getElementById('app'))
