import { PURGE } from 'redux-persist/es/constants'
import { HistoryType } from './reducer/history'
export interface PurgeType {
  type: typeof PURGE
}
export interface HistoryAddType {
  type: typeof HISTORY_ADD
  history: HistoryType
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
export const HISTORY_ADD = 'store/HISTORY_ADD'

export const historyAdd = (history: HistoryType) => ({
  type: HISTORY_ADD,
  history,
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
  | HistoryAddType
  | PlaneLandType
  | PlaneTakeoffType
  | PurgeType
