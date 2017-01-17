import React from 'react'
import { mount } from 'enzyme'
import Photo from '../app/components/Photo/Photo'

const photo = {
  'albumId': 1,
  'id': 1,
  'title': 'accusamus beatae ad facilis cum similique qui sunt',
  'url': 'http://placehold.it/600/92c952',
  'thumbnailUrl': 'http://placehold.it/150/30ac17',
}

describe('Photo Component', () => {
  let wrapper = mount(
    <Photo photo={photo} />
  )

  it('Should have an image', () => {
    expect(wrapper.find('.image img').props().src).toEqual('http://placehold.it/150/30ac17')
  })

  it('Should have a title', () => {
    expect(wrapper.find('.card-title h6').text()).toEqual('accusamus beatae ad facilis cum similique qui sunt')
  })
})
