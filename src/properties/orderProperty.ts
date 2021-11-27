import { Property } from 'csstype'

export const orderProperty = (
  order: Property.Order | undefined,
  defaultValue: Property.Order,
): Property.Order => {
  if (order !== undefined) return order
  return defaultValue
}
