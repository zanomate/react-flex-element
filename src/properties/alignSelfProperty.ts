import { Property } from 'csstype'

export const alignSelfProperty = (
  alignSelf: Property.AlignSelf | undefined,
  self: Property.AlignSelf | undefined,
  selfStart: boolean | undefined,
  selfEnd: boolean | undefined,
  selfCenter: boolean | undefined,
  selfStretch: boolean | undefined,
  selfBaseline: boolean | undefined,
  defaultValue: Property.AlignSelf,
): Property.AlignSelf => {
  if (alignSelf) return alignSelf
  if (self) return self
  if (selfStart) return 'flex-start'
  if (selfEnd) return 'flex-end'
  if (selfCenter) return 'center'
  if (selfStretch) return 'stretch'
  if (selfBaseline) return 'baseline'
  return defaultValue
}
