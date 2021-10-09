const initialUserState = {
  arr: [],
};

export default function favoriteReducer(state = initialUserState, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        arr: [...state.arr, ...action.payload],
      };

    case "DELETE_FAVORITE":
      return {
        initialUserState
      };

    default:
      return state;
  }
}

// DELETE_ITEM: (state, action) => ({
//   ...state,
//   arr: state.items.filter(item => item !== action.payload),
//   lastUpdated: Date.now()
// })
