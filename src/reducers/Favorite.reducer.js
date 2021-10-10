const initialUserState = {
  arr: [],
};

export default function favoriteReducer(state = initialUserState, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      console.log(`adicionandn ${action.payload}`)

      return {
        ...state,
        arr: [...state.arr, ...action.payload],
      };

    case "DELETE_FAVORITE":
      const idToRemove = action.payload.id;

      const currentArr = state.arr;

      const newArr = currentArr.filter( (musicCard) => {
        return musicCard.id !== idToRemove;
      })

      return {
        ...state,
        arr: newArr,
      };

    case "CLEAN_FAVORITE":
      return {
        ...state,
        arr: [],
      };

    default:
      return state;
  }
}
