import { Property } from 'csstype'

export const flexShrinkProperty = (
  flexShrink: Property.FlexShrink | undefined,
  shrink: Property.FlexShrink | boolean | undefined,
  defaultValue: Property.FlexShrink,
): Property.FlexShrink => {
  if (flexShrink !== undefined) return flexShrink
  if (shrink !== undefined) {
    if (typeof shrink === 'boolean') return shrink ? 1 : 0
    return shrink
  }
  return defaultValue
}
