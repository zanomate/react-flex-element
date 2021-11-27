import { Property } from 'csstype'
import { CSSProperties } from 'react'

export const rowGapProperty = (
  rowGap: Property.RowGap | undefined,
  defaultValue: Property.RowGap,
): Property.RowGap => {
  if (rowGap) return rowGap
  return defaultValue
}

export const columnGapProperty = (
  columnGap: Property.ColumnGap | undefined,
  colGap: Property.ColumnGap | undefined,
  defaultValue: Property.ColumnGap,
): Property.ColumnGap => {
  if (columnGap) return columnGap
  if (colGap) return colGap
  return defaultValue
}

export const gapProperties = (
  rowGap: Property.RowGap | undefined,
  columnGap: Property.ColumnGap | undefined,
  colGap: Property.ColumnGap | undefined,
  gap: Property.Gap | Property.Gap[] | undefined,
  defaultPropertiesValues: CSSProperties,
): CSSProperties => {
  let props: CSSProperties = defaultPropertiesValues
  props.rowGap = rowGapProperty(rowGap, undefined)
  props.columnGap = columnGapProperty(columnGap, colGap, undefined)

  if (gap) {
    if (Array.isArray(gap)) {
      props.rowGap = gap[0]
      props.columnGap = gap[1]
    }
    props.gap = gap as Property.Gap
  }

  return props
}
