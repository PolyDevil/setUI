import type { Props as ParentProps } from '../../ProtoSet'

export type Props = Pick<ParentProps, 'children'> &
  Partial<Pick<ParentProps, 'className' | 'color' | 'fontSize' | 'fontWeight'>>