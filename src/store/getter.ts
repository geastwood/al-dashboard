import { get } from 'lodash'
import { AppState } from './reducer/index';

export const getCurrentChart = (state: AppState) => ({
  current: get(state, 'airport.chart/current', null),
})
