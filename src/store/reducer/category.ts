import { StoreActionTypes, CATEGORY_ADD } from '../action'

export type CategoryType = {
  id: string
  name: string
}

const defaultState: CategoryType[] = []

export default (
  state: CategoryType[] = defaultState,
  action: StoreActionTypes
): CategoryType[] => {
  switch (action.type) {
    case CATEGORY_ADD:
      // only add if `id` doesn't exist
      if (state.find(({ id }) => id === action.category.id)) {
        return state
      }

      return [...state, action.category]

    default:
      return defaultState
  }
}
