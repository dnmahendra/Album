
import {getData} from '../../utils/apiHelpers'

const REQUEST_ALBUM = 'REQUEST_ALBUM'
const RECEIVE_ALBUM = 'RECEIVE_ALBUM'

// #####################################################
// action creators
export function fetchPhotos (albumId) {
  return async function (dispatch) {
    dispatch(requestAlbum(albumId))
    try {
      const res = await getData()
      const result = await res.json()
      const data = result.filter((item) => item.albumId === albumId)
      dispatch(receiveAlbum(data))
    }
    catch (err) {
      console.warn('Error in getData ' + err) // eslint-disable-line no-console
    }
  }
}

export function requestAlbum (albumId) {
  return {
    type: REQUEST_ALBUM,
    albumId,
  }
}

export function receiveAlbum (data) {
  return {
    type: RECEIVE_ALBUM,
    photos: data,
  }
}

// ###################################################
// reducers
export const initialState = {
  photos: [],
  isFetching: true,
  albumId: 1,
}

export default function photosReducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_ALBUM:
      return {
        ...state,
        isFetching: true,
        albumId: action.albumId,
      }
    case RECEIVE_ALBUM:
      return action.photos === null
        ? {
          ...state,
          isFetching: false,
        }
        : {
          ...state,
          isFetching: false,
          photos: action.photos,
        }
    default:
      return state
  }
}
