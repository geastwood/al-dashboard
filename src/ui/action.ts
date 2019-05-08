export const QUERY = 'ui/QUERY'
export const LOAD_HISTORY_DATA = 'ui/LOAD_HISTORY_DATA'

export const query = (query: string) => ({
  type: QUERY,
  payload: {
    query,
  },
})

export const loadHistory = (history: any) => ({
  type: LOAD_HISTORY_DATA,
  payload: history,
})
