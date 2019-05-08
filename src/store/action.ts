import { PURGE } from 'redux-persist/es/constants'
import { ProductType } from './reducer/product'
import { CategoryType } from './reducer/category'
export interface PurgeType {
  type: typeof PURGE
}
export interface ProductAddType {
  type: typeof PRODUCT_ADD
  product: ProductType
}

export interface CategoryAddType {
  type: typeof CATEGORY_ADD
  category: CategoryType
}

export interface PlaneLandType {
  type: typeof PLANE_LAND
  payload: { name: string; value: any }
}

export interface PlaneTakeoffType {
  type: typeof PLANE_TAKEOFF
  payload: string
}

export const PLANE_LAND = 'store/PLANE_LAND'
export const PLANE_TAKEOFF = 'store/PLANE_TAKEOFF'
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
export const landPlane = (name: string, value: any): PlaneLandType => ({
  type: PLANE_LAND,
  payload: { name, value },
})

export const takeOffPlane = (name: string): PlaneTakeoffType => ({
  type: PLANE_TAKEOFF,
  payload: name,
})

export type StoreActionTypes =
  | ProductAddType
  | CategoryAddType
  | PlaneLandType
  | PlaneTakeoffType
  | PurgeType
