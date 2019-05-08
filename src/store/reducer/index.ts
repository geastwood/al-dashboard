import { combineReducers } from 'redux'
import history from './history'
import airport from './airport'

const rootReducer = combineReducers({
  airport,
  history,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
