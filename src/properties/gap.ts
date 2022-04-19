import { Property } from 'csstype'
import { CSSProperties } from 'react'

export const rowGapProperty = (
  rowGap: Property.RowGap<number> | undefined,
  defaultValue: Property.RowGap<number>,
): Property.RowGap<number> => {
  if (rowGap) return rowGap
  return defaultValue
}

export const columnGapProperty = (
  columnGap: Property.ColumnGap<number> | undefined,
  colGap: Property.ColumnGap<number> | undefined,
  defaultValue: Property.ColumnGap<number>,
): Property.ColumnGap<number> => {
  if (columnGap) return columnGap
  if (colGap) return colGap
  return defaultValue
}

export const gapProperties = (
  rowGap: Property.RowGap<number> | undefined,
  columnGap: Property.ColumnGap<number> | undefined,
  colGap: Property.ColumnGap<number> | undefined,
  gap: Property.Gap<number> | Property.Gap<number>[] | undefined,
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
