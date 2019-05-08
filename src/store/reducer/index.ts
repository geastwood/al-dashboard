import { combineReducers } from 'redux'
import product from './product'
import category from './category'
import airport from './airport'

const rootReducer = combineReducers({
  airport,
  product,
  category,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
