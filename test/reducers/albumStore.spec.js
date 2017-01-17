import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import photosReducer from '../../app/redux/modules/photos'
import * as albumActionCreators from '../../app/redux/modules/photos'

describe('Album Store', () => {
  const store = createStore(photosReducer, applyMiddleware(thunk))

  it('Should return album 3', async () => {
    const action = albumActionCreators.fetchPhotos(3)

    await store.dispatch(action)
    const actual = store.getState()

    expect(actual.albumId).toEqual(3)
  })
})
