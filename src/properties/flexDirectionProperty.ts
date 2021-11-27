import { Property } from 'csstype'

export const flexDirectionProperty = (
  flexDirection: Property.FlexDirection | undefined,
  direction: Property.FlexDirection | undefined,
  row: boolean | undefined,
  col: boolean | undefined,
  column: boolean | undefined,
  rowReverse: boolean | undefined,
  colReverse: boolean | undefined,
  columnReverse: boolean | undefined,
  reverse: boolean | undefined,
  defaultValue: Property.FlexDirection
): Property.FlexDirection => {
  if(flexDirection) return flexDirection
  if(direction) return direction
  if (row) return reverse ? 'row-reverse' : 'row'
  if (col) return reverse ? 'column-reverse' : 'column'
  if (column) return reverse ? 'column-reverse' : 'column'
  if (rowReverse) return reverse ? 'row' : 'row-reverse'
  if (colReverse) return reverse ? 'column' : 'column-reverse'
  if (columnReverse) return reverse ? 'column' : 'column-reverse'
  return defaultValue
}
