import type {
  PaddingSizeType,
  TextAlignType,
  FontFamilyType,
  FontSizeType,
  ColorType,
} from 'CSS'
import { WeightType } from '../css'

export type LevelType = 1 | 2 | 3 | 4

export type Props = {
  level: LevelType
  weight?: WeightType
  truncate?: boolean

  color?: ColorType
  align?: TextAlignType
  type?: FontFamilyType
  size?: FontSizeType

  padding?: PaddingSizeType
  paddingX?: PaddingSizeType
  paddingY?: PaddingSizeType
  paddingTop?: PaddingSizeType
  paddingRight?: PaddingSizeType
  paddingBottom?: PaddingSizeType
  paddingLeft?: PaddingSizeType
}