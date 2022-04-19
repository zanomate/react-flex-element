import { Property } from 'csstype'

export interface ContainerProps {
  // display
  display?: Property.Display
  inline?: boolean
  // flex-direction
  flexDirection?: Property.FlexDirection
  direction?: Property.FlexDirection
  row?: boolean
  col?: boolean
  column?: boolean
  rowReverse?: boolean
  colReverse?: boolean
  columnReverse?: boolean
  reverse?: boolean
  // flex-wrap
  flexWrap?: Property.FlexWrap
  wrap?: Property.FlexWrap | boolean
  nowrap?: boolean
  wrapReverse?: boolean
  // justify-content
  justifyContent?: Property.JustifyContent
  justify?: Property.JustifyContent
  start?: boolean
  end?: boolean
  center?: boolean
  spaceBetween?: boolean
  spaceAround?: boolean
  spaceEvenly?: boolean
  // align-items
  alignItems?: Property.AlignItems
  align?: Property.AlignItems
  alignStart?: boolean
  alignEnd?: boolean
  alignCenter?: boolean
  stretch?: boolean
  alignStretch?: boolean
  baseline?: boolean
  alignBaseline?: boolean
  // align-content
  alignContent?: Property.AlignContent
  contentStart?: boolean
  contentEnd?: boolean
  contentCenter?: boolean
  contentStretch?: boolean
  contentSpaceBetween?: boolean
  contentSpaceAround?: boolean
  // gap
  gap?: Property.Gap<number> | Property.Gap<number>[]
  // row-gap
  rowGap?: Property.RowGap<number>
  // column-gap
  columnGap?: Property.ColumnGap<number>
  colGap?: Property.ColumnGap<number>
}
