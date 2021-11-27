import { Property } from 'csstype'

export const flexWrapProperty = (
  flexWrap: Property.FlexWrap | undefined,
  wrap: Property.FlexWrap | boolean | undefined,
  nowrap: boolean | undefined,
  wrapReverse: boolean | undefined,
  defaultValue: Property.FlexWrap
): Property.FlexWrap => {
  if(flexWrap) return flexWrap
  if (wrap) {
    if(typeof wrap === 'string') return wrap as Property.FlexWrap
    if(typeof wrap === 'boolean') return wrap ? 'wrap' : 'nowrap'
  }
  if (nowrap) return 'nowrap'
  if (wrapReverse) return 'wrap-reverse'
  return defaultValue
}
