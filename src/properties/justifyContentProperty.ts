import { Property } from 'csstype'

export const justifyContentProperty = (
  justifyContent: Property.JustifyContent | undefined,
  justify: Property.JustifyContent | undefined,
  start: boolean | undefined,
  end: boolean | undefined,
  center: boolean | undefined,
  spaceBetween: boolean | undefined,
  spaceAround: boolean | undefined,
  spaceEvenly: boolean | undefined,
  defaultValue: Property.JustifyContent
): Property.JustifyContent => {
  if(justifyContent) return justifyContent
  if(justify) return justify
  if (start) return 'flex-start'
  if (end) return 'flex-end'
  if (center) return 'center'
  if (spaceBetween) return 'space-between'
  if (spaceAround) return 'space-around'
  if (spaceEvenly) return 'space-evenly'
  return defaultValue
}
