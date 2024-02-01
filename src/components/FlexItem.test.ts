import { render } from '@testing-library/react'
import { createElement } from 'react'
import { FlexItem } from './FlexItem'

const flexItemStyle = (props) => {
  const component = render(createElement(FlexItem, props))
  return component.container.querySelector('div').style
}

describe('FlexItem', () => {

  it('order', () => {
    expect(flexItemStyle({ order: '0' })).toHaveProperty('order', '0')
    expect(flexItemStyle({ order: '1' })).toHaveProperty('order', '1')
    expect(flexItemStyle({ order: '123' })).toHaveProperty('order', '123')
    expect(flexItemStyle({ order: 0 })).toHaveProperty('order', '0')
    expect(flexItemStyle({ order: 1 })).toHaveProperty('order', '1')
    expect(flexItemStyle({ order: 123 })).toHaveProperty('order', '123')
  })

  it('flex-grow', () => {
    expect(flexItemStyle({ flexGrow: '0' })).toHaveProperty('flex-grow', '0')
    expect(flexItemStyle({ flexGrow: '1' })).toHaveProperty('flex-grow', '1')
    expect(flexItemStyle({ flexGrow: '123' })).toHaveProperty('flex-grow', '123')
    expect(flexItemStyle({ flexGrow: 0 })).toHaveProperty('flex-grow', '0')
    expect(flexItemStyle({ flexGrow: 1 })).toHaveProperty('flex-grow', '1')
    expect(flexItemStyle({ flexGrow: 123 })).toHaveProperty('flex-grow', '123')
    expect(flexItemStyle({ grow: '0' })).toHaveProperty('flex-grow', '0')
    expect(flexItemStyle({ grow: '1' })).toHaveProperty('flex-grow', '1')
    expect(flexItemStyle({ grow: '123' })).toHaveProperty('flex-grow', '123')
    expect(flexItemStyle({ grow: 0 })).toHaveProperty('flex-grow', '0')
    expect(flexItemStyle({ grow: 1 })).toHaveProperty('flex-grow', '1')
    expect(flexItemStyle({ grow: 123 })).toHaveProperty('flex-grow', '123')

    expect(flexItemStyle({ grow: false })).toHaveProperty('flex-grow', '0')
    expect(flexItemStyle({ grow: true })).toHaveProperty('flex-grow', '1')
  })

  it('flex-shrink', () => {
    expect(flexItemStyle({ flexShrink: '0' })).toHaveProperty('flex-shrink', '0')
    expect(flexItemStyle({ flexShrink: '1' })).toHaveProperty('flex-shrink', '1')
    expect(flexItemStyle({ flexShrink: '123' })).toHaveProperty('flex-shrink', '123')
    expect(flexItemStyle({ flexShrink: 0 })).toHaveProperty('flex-shrink', '0')
    expect(flexItemStyle({ flexShrink: 1 })).toHaveProperty('flex-shrink', '1')
    expect(flexItemStyle({ flexShrink: 123 })).toHaveProperty('flex-shrink', '123')
    expect(flexItemStyle({ shrink: '0' })).toHaveProperty('flex-shrink', '0')
    expect(flexItemStyle({ shrink: '1' })).toHaveProperty('flex-shrink', '1')
    expect(flexItemStyle({ shrink: '123' })).toHaveProperty('flex-shrink', '123')
    expect(flexItemStyle({ shrink: 0 })).toHaveProperty('flex-shrink', '0')
    expect(flexItemStyle({ shrink: 1 })).toHaveProperty('flex-shrink', '1')
    expect(flexItemStyle({ shrink: 123 })).toHaveProperty('flex-shrink', '123')

    expect(flexItemStyle({ shrink: false })).toHaveProperty('flex-shrink', '0')
    expect(flexItemStyle({ shrink: true })).toHaveProperty('flex-shrink', '1')
  })

  it('flex-basis', () => {
    expect(flexItemStyle({ flexBasis: '0' })).toHaveProperty('flex-basis', '0px')
    expect(flexItemStyle({ flexBasis: '1px' })).toHaveProperty('flex-basis', '1px')
    expect(flexItemStyle({ flexBasis: '100%' })).toHaveProperty('flex-basis', '100%')
    expect(flexItemStyle({ flexBasis: 0 })).toHaveProperty('flex-basis', '0px')
    expect(flexItemStyle({ flexBasis: 1 })).toHaveProperty('flex-basis', '1px')
    expect(flexItemStyle({ flexBasis: 123 })).toHaveProperty('flex-basis', '123px')
    expect(flexItemStyle({ basis: '0' })).toHaveProperty('flex-basis', '0px')
    expect(flexItemStyle({ basis: '1px' })).toHaveProperty('flex-basis', '1px')
    expect(flexItemStyle({ basis: '100%' })).toHaveProperty('flex-basis', '100%')
    expect(flexItemStyle({ basis: 0 })).toHaveProperty('flex-basis', '0px')
    expect(flexItemStyle({ basis: 1 })).toHaveProperty('flex-basis', '1px')
    expect(flexItemStyle({ basis: 123 })).toHaveProperty('flex-basis', '123px')
  })

  it('align-self', () => {
    expect(flexItemStyle({ alignSelf: 'flex-start' })).toHaveProperty('align-self', 'flex-start')
    expect(flexItemStyle({ alignSelf: 'flex-end' })).toHaveProperty('align-self', 'flex-end')
    expect(flexItemStyle({ alignSelf: 'center' })).toHaveProperty('align-self', 'center')
    expect(flexItemStyle({ alignSelf: 'stretch' })).toHaveProperty('align-self', 'stretch')
    expect(flexItemStyle({ alignSelf: 'baseline' })).toHaveProperty('align-self', 'baseline')
    expect(flexItemStyle({ self: 'flex-start' })).toHaveProperty('align-self', 'flex-start')
    expect(flexItemStyle({ self: 'flex-end' })).toHaveProperty('align-self', 'flex-end')
    expect(flexItemStyle({ self: 'center' })).toHaveProperty('align-self', 'center')
    expect(flexItemStyle({ self: 'stretch' })).toHaveProperty('align-self', 'stretch')
    expect(flexItemStyle({ self: 'baseline' })).toHaveProperty('align-self', 'baseline')

    expect(flexItemStyle({ selfStart: true })).toHaveProperty('align-self', 'flex-start')
    expect(flexItemStyle({ selfEnd: true })).toHaveProperty('align-self', 'flex-end')
    expect(flexItemStyle({ selfCenter: true })).toHaveProperty('align-self', 'center')
    expect(flexItemStyle({ selfStretch: true })).toHaveProperty('align-self', 'stretch')
    expect(flexItemStyle({ selfBaseline: true })).toHaveProperty('align-self', 'baseline')

    expect(flexItemStyle({ alignSelf: 'flex-start', selfBaseline: true })).toHaveProperty('align-self', 'flex-start')
    expect(flexItemStyle({ self: 'flex-start', selfBaseline: true })).toHaveProperty('align-self', 'flex-start')
  })

  it('width', () => {
    expect(flexItemStyle({ fill: true })).toHaveProperty('width', '100%')
    expect(flexItemStyle({ fill: 'x' })).toHaveProperty('width', '100%')
    expect(flexItemStyle({ fill: 'page' })).toHaveProperty('width', '100vw')
    expect(flexItemStyle({ fill: 'page-x' })).toHaveProperty('width', '100vw')
  })

  it('height', () => {
    expect(flexItemStyle({ fill: true })).toHaveProperty('height', '100%')
    expect(flexItemStyle({ fill: 'y' })).toHaveProperty('height', '100%')
    expect(flexItemStyle({ fill: 'page' })).toHaveProperty('height', '100vh')
    expect(flexItemStyle({ fill: 'page-y' })).toHaveProperty('height', '100vh')
  })
})
