import type { Props as ParentProps } from '../types'

export type Props = Partial<
  Pick<
    ParentProps,
    | 'children'
    | 'className'
    | 'color'
    | 'fontFamily'
    | 'fontSize'
    | 'fontWeight'
  >
>
