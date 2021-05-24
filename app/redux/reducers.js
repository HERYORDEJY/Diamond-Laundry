export default function reducer(state, action) {
  switch (action.type) {
    case 'selectItems':
      return { ...state };
    default:
      return state;
  }
}
