export const updateFilter = (filter) => {
  return {
    type: 'CHANGE_FILTER',
    payload: {
      filter: filter
    }
  }
}
