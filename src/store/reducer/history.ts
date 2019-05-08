import { StoreActionTypes, HISTORY_ADD } from '../action'

export type HistoryType = {
  query: string
  data: {}
  updatedTime: string
}

const defaultState: HistoryType[] = []

export default (
  state: HistoryType[] = defaultState,
  action: StoreActionTypes
) => {
  switch (action.type) {
    case HISTORY_ADD:
      return [...state, action.history]

    default:
      return defaultState
  }
}
