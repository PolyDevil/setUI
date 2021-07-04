import { Styles as MarginBottom } from './bottom'
import { Styles as MarginLeft } from './left'
import { Styles as MarginRight } from './right'
import { Styles as MarginTop } from './top'

export function resolve<T>(
  props: T
): Record<'top' | 'bottom' | 'left' | 'right', string> {
  let marginTop = MarginTop.none
  if ('marginTop' in props) {
    marginTop = MarginTop[props['marginTop']]
  } else if ('marginY' in props) {
    marginTop = MarginTop[props['marginY']]
  } else if ('margin' in props) {
    marginTop = MarginTop[props['margin']]
  }

  let marginBottom = MarginBottom.none
  if ('marginBottom' in props) {
    marginBottom = MarginBottom[props['marginBottom']]
  } else if ('marginY' in props) {
    marginBottom = MarginBottom[props['marginY']]
  } else if ('margin' in props) {
    marginBottom = MarginBottom[props['margin']]
  }

  let marginLeft = MarginLeft.none
  if ('marginLeft' in props) {
    marginLeft = MarginLeft[props['marginLeft']]
  } else if ('marginX' in props) {
    marginLeft = MarginLeft[props['marginX']]
  } else if ('margin' in props) {
    marginLeft = MarginLeft[props['margin']]
  }

  let marginRight = MarginRight.none
  if ('marginLeft' in props) {
    marginRight = MarginRight[props['marginLeft']]
  } else if ('marginX' in props) {
    marginRight = MarginRight[props['marginX']]
  } else if ('margin' in props) {
    marginRight = MarginRight[props['margin']]
  }

  return {
    top: marginTop,
    bottom: marginBottom,
    left: marginLeft,
    right: marginRight,
  }
}