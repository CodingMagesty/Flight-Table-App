export const updateSearch = (search) => {
  return {
    type: 'CHANGE_SEARCH',
    payload: {
      filter: search
    }
  }
}
