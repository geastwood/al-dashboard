import { get } from 'lodash'
import { AppState } from './reducer/index'

export const getForHomeScreen = (state: AppState) => ({
  current: get(state, 'airport.chart/current', null),
})

export const getHistory = (state: AppState) => ({
  data: state.history,
})
