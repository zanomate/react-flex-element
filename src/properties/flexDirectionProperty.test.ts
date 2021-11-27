import { flexDirectionProperty } from './flexDirectionProperty'

const un = undefined

describe('flexDirection', () => {

  it('flexDirection', () => {
    expect(flexDirectionProperty('row', un, un, un, un, un, un, un, un, un)).toEqual('row')
    expect(flexDirectionProperty('column', un, un, un, un, un, un, un, un, un)).toEqual('column')
    expect(flexDirectionProperty('row-reverse', un, un, un, un, un, un, un, un, un)).toEqual('row-reverse')
    expect(flexDirectionProperty('column-reverse', un, un, un, un, un, un, un, un, un)).toEqual('column-reverse')
  })

  it('direction', () => {
    expect(flexDirectionProperty(un, 'row', un, un, un, un, un, un, un, un)).toEqual('row')
    expect(flexDirectionProperty(un, 'column', un, un, un, un, un, un, un, un)).toEqual('column')
    expect(flexDirectionProperty(un, 'row-reverse', un, un, un, un, un, un, un, un)).toEqual('row-reverse')
    expect(flexDirectionProperty(un, 'column-reverse', un, un, un, un, un, un, un, un)).toEqual('column-reverse')
  })

  it('row', () => {
    expect(flexDirectionProperty(un, un, false, un, un, un, un, un, un, un)).toEqual(un)
    expect(flexDirectionProperty(un, un, true, un, un, un, un, un, un, un)).toEqual('row')
  })

  it('col', () => {
    expect(flexDirectionProperty(un, un, un, false, un, un, un, un, un, un)).toEqual(un)
    expect(flexDirectionProperty(un, un, un, true, un, un, un, un, un, un)).toEqual('column')
  })

  it('column', () => {
    expect(flexDirectionProperty(un, un, un, un, false, un, un, un, un, un)).toEqual(un)
    expect(flexDirectionProperty(un, un, un, un, true, un, un, un, un, un)).toEqual('column')
  })

  it('rowReverse', () => {
    expect(flexDirectionProperty(un, un, un, un, un, false, un, un, un, un)).toEqual(un)
    expect(flexDirectionProperty(un, un, un, un, un, true, un, un, un, un)).toEqual('row-reverse')
  })

  it('colReverse', () => {
    expect(flexDirectionProperty(un, un, un, un, un, un, false, un, un, un)).toEqual(un)
    expect(flexDirectionProperty(un, un, un, un, un, un, true, un, un, un)).toEqual('column-reverse')
  })

  it('columnReverse', () => {
    expect(flexDirectionProperty(un, un, un, un, un, un, un, false, un, un)).toEqual(un)
    expect(flexDirectionProperty(un, un, un, un, un, un, un, true, un, un)).toEqual('column-reverse')
  })

  it('reverse', () => {
    expect(flexDirectionProperty(un, un, un, un, un, un, un, un, false, un)).toEqual(un)
    expect(flexDirectionProperty(un, un, un, un, un, un, un, un, true, un)).toEqual(un)
    expect(flexDirectionProperty('row', un, un, un, un, un, un, un, false, un)).toEqual('row')
    expect(flexDirectionProperty('row', un, un, un, un, un, un, un, true, un)).toEqual('row')
    expect(flexDirectionProperty(un, 'row', un, un, un, un, un, un, false, un)).toEqual('row')
    expect(flexDirectionProperty(un, 'row', un, un, un, un, un, un, true, un)).toEqual('row')
    expect(flexDirectionProperty(un, un, false, un, un, un, un, un, false, un)).toEqual(un)
    expect(flexDirectionProperty(un, un, true, un, un, un, un, un, true, un)).toEqual('row-reverse')
    expect(flexDirectionProperty(un, un, un, false, un, un, un, un, false, un)).toEqual(un)
    expect(flexDirectionProperty(un, un, un, true, un, un, un, un, true, un)).toEqual('column-reverse')
    expect(flexDirectionProperty(un, un, un, un, false, un, un, un, false, un)).toEqual(un)
    expect(flexDirectionProperty(un, un, un, un, true, un, un, un, true, un)).toEqual('column-reverse')
    expect(flexDirectionProperty(un, un, un, un, un, false, un, un, false, un)).toEqual(un)
    expect(flexDirectionProperty(un, un, un, un, un, true, un, un, true, un)).toEqual('row')
    expect(flexDirectionProperty(un, un, un, un, un, un, false, un, false, un)).toEqual(un)
    expect(flexDirectionProperty(un, un, un, un, un, un, true, un, true, un)).toEqual('column')
    expect(flexDirectionProperty(un, un, un, un, un, un, un, false, false, un)).toEqual(un)
    expect(flexDirectionProperty(un, un, un, un, un, un, un, true, true, un)).toEqual('column')
  })

  it('defaultValue', () => {
    expect(flexDirectionProperty(un, un, un, un, un, un, un, un, un, 'row')).toEqual('row')
    expect(flexDirectionProperty(un, un, un, un, un, un, un, un, un, 'column')).toEqual('column')
    expect(flexDirectionProperty(un, un, un, un, un, un, un, un, un, 'row-reverse')).toEqual('row-reverse')
    expect(flexDirectionProperty(un, un, un, un, un, un, un, un, un, 'column-reverse')).toEqual('column-reverse')
  })

})
