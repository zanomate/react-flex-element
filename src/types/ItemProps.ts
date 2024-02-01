import { Property } from 'csstype'

export type FillValue = boolean | 'x' | 'y' | 'page' | 'page-x' | 'page-y'

export interface ItemProps {
  // order
  order?: Property.Order
  // flex-grow
  flexGrow?: Property.FlexGrow
  grow?: Property.FlexGrow | boolean
  // flex-shrink
  flexShrink?: Property.FlexShrink
  shrink?: Property.FlexShrink | boolean
  // flex-basis
  flexBasis?: Property.FlexBasis
  basis?: Property.FlexBasis
  // align-self
  alignSelf?: Property.AlignSelf
  self?: Property.AlignSelf
  selfStart?: boolean
  selfEnd?: boolean
  selfCenter?: boolean
  selfStretch?: boolean
  selfBaseline?: boolean
  // special
  fill?: FillValue
}
