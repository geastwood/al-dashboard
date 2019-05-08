import { StoreActionTypes, HISTORY_ADD } from '../action'

export type HistoryType = {
  query: string
  data: {}
  charttype: string
  updatedTime: string
}

const defaultState: HistoryType[] = []

export default (
  state: HistoryType[] = defaultState,
  action: StoreActionTypes
) => {
  switch (action.type) {
    case HISTORY_ADD:
      const hasHistory = state.find(h => h.query === action.history.query)
      if (hasHistory) {
        return state
      }
      return [...state, action.history]

    default:
      return state
  }
}
