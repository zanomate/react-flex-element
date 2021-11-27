import { Property } from 'csstype'

export const flexGrowProperty = (
  flexGrow: Property.FlexGrow | undefined,
  grow: Property.FlexGrow | boolean | undefined,
  defaultValue: Property.FlexGrow,
): Property.FlexGrow => {
  if (flexGrow !== undefined) return flexGrow
  if (grow !== undefined) {
    if (typeof grow === 'boolean') return grow ? 1 : 0
    return grow
  }
  return defaultValue
}
