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
        ...state,
        arr: [],
      };

    default:
      return state;
  }
}
