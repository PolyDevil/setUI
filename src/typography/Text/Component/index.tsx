import { FC, createElement } from 'react'
import cn from 'classnames'
import {
  Color,
  TextAlign,
  TextDecoration,
  TextTransform,
  FontFamily,
  FontWeight,
  FontSize,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  PaddingTop,
} from 'CSS'
import { Props } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const Text: FC<Props> = ({
  as,

  truncate,
  color,

  align,
  decoration,
  transform,

  type,
  size,
  weight,

  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,

  children,
}) => {
  const resolvedPaddingTop =
    PaddingTop[paddingTop] ||
    PaddingTop[paddingY] ||
    PaddingTop[padding] ||
    PaddingTop.none
  const resolvedPaddingBottom =
    PaddingBottom[paddingBottom] ||
    PaddingBottom[paddingY] ||
    PaddingBottom[padding] ||
    PaddingBottom.none
  const resolvedPaddingLeft =
    PaddingLeft[paddingLeft] ||
    PaddingLeft[paddingX] ||
    PaddingLeft[padding] ||
    PaddingLeft.none
  const resolvedPaddingRight =
    PaddingRight[paddingRight] ||
    PaddingRight[paddingX] ||
    PaddingRight[padding] ||
    PaddingRight.none

  return createElement(
    component[as] || component.p,

    {
      className: cn([
        ClassName,
        Color[color] || Color.grey130,

        TextAlign[align] || TextAlign.left,
        TextDecoration[decoration] || TextDecoration.default,
        TextTransform[transform] || TextTransform.default,

        FontFamily[type] || FontFamily.default,
        FontSize[size] || FontSize.medium,
        FontWeight[weight] || FontWeight.default,

        resolvedPaddingTop,
        resolvedPaddingBottom,
        resolvedPaddingLeft,
        resolvedPaddingRight,
      ]),
    },

    children
  )
}

export type { Props } from './types'

export default Text
