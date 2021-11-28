import { tuple } from 'utils'
import type { AspectRatioType, ZIndexType } from 'CSS'
import type { Props as BlockLayerProps } from 'reason/layers/Block'
import type { Props as FlexLayerProps } from 'reason/layers/Flex'
import type { DirectionType } from './css'

const Tags = ['main', 'div', 'span']
const TAGS = tuple(...Tags)

export type AsType = typeof TAGS[number]

export type Props = {
  children?: JSX.Element | Array<JSX.Element>
  as?: AsType

  // custom
  direction?: DirectionType

  // generic
  aspectRatio?: AspectRatioType

  zIndex?: ZIndexType
} & BlockLayerProps &
  FlexLayerProps
