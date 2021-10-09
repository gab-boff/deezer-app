export function favoriteAction (item) {
  return {
    type: 'ADD_FAVORITE',
    payload: item,
  }
}

export function removeFavoriteAction (index) {
  return {
    type: 'DELETE_FAVORITE',
    index,
  }
}
