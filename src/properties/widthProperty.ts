import { Property } from 'csstype'
import { FillValue } from '../types/FillValue'

export const widthProperty = (
  fill: FillValue | boolean | undefined,
  defaultValue: Property.Width,
): Property.FlexBasis => {
  if (fill === true || fill === FillValue.X) return '100%'
  return defaultValue
}
