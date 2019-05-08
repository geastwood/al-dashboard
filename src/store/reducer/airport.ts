import { omit } from 'lodash'
import * as actions from '../action'
export type StateType = { [key: string]: { name: string; value: any } }

const defaultState: StateType = {}

export default (
  state: StateType = defaultState,
  action: actions.StoreActionTypes
): StateType => {
  switch (action.type) {
    case actions.PLANE_LAND:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }

    case actions.PLANE_TAKEOFF:
      return omit(state, action.payload)

    default:
      return state
  }
}
