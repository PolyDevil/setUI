import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: '<h4>: Заголовок четвертого уровня',
    code: render(<Component>Заголовок первого уровня</Component>),
  },
]
