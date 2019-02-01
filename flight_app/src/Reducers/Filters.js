export default function updateFilter(state='departured', action) {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.payload.filter;
    default:
      return state;
  }
}
