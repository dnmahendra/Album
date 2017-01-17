import 'isomorphic-fetch'

export function getData () {
  return fetch('https://jsonplaceholder.typicode.com/photos')
}
