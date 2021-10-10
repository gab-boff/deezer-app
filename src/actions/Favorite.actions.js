export function favoriteAction (item) {
  return {
    type: 'ADD_FAVORITE',
    payload: item,
  }
}

export function removeFavoriteAction (id) {
  return {
    type: 'DELETE_FAVORITE',
    payload: {
      id,
    }
  }
}

export function cleanFavoriteAction (id) {
  return {
    type: 'CLEAN_FAVORITE',
  }
}
