import { Property } from 'csstype'
import { FillValue } from '../types/ItemProps'

export const heightProperty = (
  fill: FillValue | undefined,
  defaultValue: Property.Height,
): Property.FlexBasis => {
  if (fill === true || fill === 'y') return '100%'
  if (fill === 'page' || 'page-y') return '100vh'
  return defaultValue
}
