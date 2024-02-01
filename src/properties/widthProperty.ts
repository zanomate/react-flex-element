import { Property } from 'csstype'
import { FillValue } from '../types/ItemProps'

export const widthProperty = (
  fill: FillValue | undefined,
  defaultValue: Property.Width,
): Property.FlexBasis => {
  if (fill === true || fill === 'x') return '100%'
  if (fill === 'page' || 'page-x') return '100vw'
  return defaultValue
}
