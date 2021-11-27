import { Property } from 'csstype'

export const flexBasisProperty = (
  flexBasis: Property.FlexBasis | undefined,
  basis: Property.FlexBasis | undefined,
  defaultValue: Property.FlexBasis,
): Property.FlexBasis => {
  if (flexBasis !== undefined) return flexBasis
  if (basis !== undefined) return basis
  return defaultValue
}
