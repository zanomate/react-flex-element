import { Property } from 'csstype'

export const alignContentProperty = (
  alignContent: Property.AlignContent | undefined,
  contentStart: boolean | undefined,
  contentEnd: boolean | undefined,
  contentCenter: boolean | undefined,
  contentStretch: boolean | undefined,
  contentSpaceBetween: boolean | undefined,
  contentSpaceAround: boolean | undefined,
  defaultValue: Property.AlignContent,
): Property.AlignContent => {
  if (alignContent) return alignContent
  if (contentStart) return 'flex-start'
  if (contentEnd) return 'flex-end'
  if (contentCenter) return 'center'
  if (contentStretch) return 'stretch'
  if (contentSpaceBetween) return 'space-between'
  if (contentSpaceAround) return 'space-around'
  return defaultValue
}
