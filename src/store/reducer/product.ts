import { StoreActionTypes, PRODUCT_ADD } from '../action'

export type ProductType = {
  id: string
  name: string
  price: string
  categoryIds: string[]
  productIds: string[]
}

const defaultState: ProductType[] = []

export default (
  state: ProductType[] = defaultState,
  action: StoreActionTypes
): ProductType[] => {
  switch (action.type) {
    case PRODUCT_ADD:
      // only add if `id` doesn't exist
      if (state.find(({ id }) => id === action.product.id)) {
        return state
      }

      return [...state, action.product]

    default:
      return defaultState
  }
}
