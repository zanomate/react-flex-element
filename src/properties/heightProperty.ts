import { Property } from 'csstype'
import { FillValue } from '../types/FillValue'

export const heightProperty = (
  fill: FillValue | boolean | undefined,
  defaultValue: Property.Height,
): Property.FlexBasis => {
  if (fill === true || fill === FillValue.Y) return '100%'
  return defaultValue
}
