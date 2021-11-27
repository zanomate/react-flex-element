import { Property } from 'csstype'

export const displayProperty = (
  display: Property.Display | undefined,
  inline: boolean | undefined,
  defaultValue: Property.Display
): Property.Display => {
  if(display) return display
  if (inline) return 'inline-flex'
  return defaultValue
}
