import { ProductType } from './reducer/product'
import { CategoryType } from './reducer/category'

export interface ProductAddType {
  type: typeof PRODUCT_ADD
  product: ProductType
}

export interface CategoryAddType {
  type: typeof CATEGORY_ADD
  category: CategoryType
}

export const PRODUCT_ADD = 'store/PRODUCT_ADD'
export const CATEGORY_ADD = 'store/CATEGORY_ADD'

export const productAdd = (product: ProductType) => ({
  type: PRODUCT_ADD,
  product,
})

export const categoryAdd = (category: CategoryType) => ({
  type: CATEGORY_ADD,
  category,
})

export type StoreActionTypes = ProductAddType | CategoryAddType
