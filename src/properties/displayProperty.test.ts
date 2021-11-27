import { displayProperty } from './displayProperty'

describe('display', () => {

  it('display', () => {
    expect(displayProperty('flex', undefined, undefined)).toEqual('flex')
    expect(displayProperty('inline-flex', undefined, undefined)).toEqual('inline-flex')
    expect(displayProperty('block', undefined, undefined)).toEqual('block')
  })

  it('inline', () => {
    expect(displayProperty(undefined, false, 'flex')).toEqual('flex')
    expect(displayProperty(undefined, true, 'flex')).toEqual('inline-flex')
  })

  it('defaultValue', () => {
    expect(displayProperty(undefined, undefined, 'flex')).toEqual('flex')
    expect(displayProperty(undefined, undefined, 'inline-flex')).toEqual('inline-flex')
    expect(displayProperty(undefined, undefined, 'block')).toEqual('block')
  })

  it('combined', () => {
    expect(displayProperty('block', false, 'flex')).toEqual('block')
    expect(displayProperty('block', true, 'flex')).toEqual('block')
  })

})
