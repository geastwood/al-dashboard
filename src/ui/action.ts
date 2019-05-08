export const QUERY = 'ui/QUERY'

export const query = (query: string) => ({
  type: QUERY,
  payload: {
    query,
  },
})
