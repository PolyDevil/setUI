import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: '<h2>: Заголовок второго уровня',
    code: render(<Component>Заголовок второго уровня</Component>),
  },
]
