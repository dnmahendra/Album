import React from 'react'
import { mount } from 'enzyme'
import { AlbumContainer } from '../app/containers/AlbumContainer/AlbumContainer'

const photos = [
  {
    'albumId': 1,
    'id': 1,
    'title': 'accusamus beatae ad facilis cum similique qui sunt',
    'url': 'http://placehold.it/600/92c952',
    'thumbnailUrl': 'http://placehold.it/150/30ac17',
  },
  {
    'albumId': 1,
    'id': 2,
    'title': 'reprehenderit est deserunt velit ipsam',
    'url': 'http://placehold.it/600/771796',
    'thumbnailUrl': 'http://placehold.it/150/dff9f6',
  },
  {
    'albumId': 2,
    'id': 3,
    'title': 'officia porro iure quia iusto qui ipsa ut modi',
    'url': 'http://placehold.it/600/24f355',
    'thumbnailUrl': 'http://placehold.it/150/1941e9',
  },
  {
    'albumId': 3,
    'id': 4,
    'title': 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
    'url': 'http://placehold.it/600/d32776',
    'thumbnailUrl': 'http://placehold.it/150/39e985',
  },
  {
    'albumId': 4,
    'id': 5,
    'title': 'natus nisi omnis corporis facere molestiae rerum in',
    'url': 'http://placehold.it/600/f66b97',
    'thumbnailUrl': 'http://placehold.it/150/7735a',
  },
]

const props = {
  photos: photos,
  fetchPhotos: () => { return Promise.resolve() },
  isFetching: false,
}

describe('Album Contianer Page', () => {
  let wrapper = mount(
    <AlbumContainer {...props} />
  )

  it('Page should have a title', () => {
    expect(wrapper.find('.page-heading').text()).toEqual('Album - 1')
  })

  it('Should have photos list', () => {
    expect(wrapper.find('.photo-card').length).toEqual(5)
  })

  it('Should have pagination component', () => {
    expect(wrapper.find('.paginate').children().length).toEqual(1)
    expect(wrapper.find('.paginate').children().at(0).text()).toContain('Next Album')
  })
})
