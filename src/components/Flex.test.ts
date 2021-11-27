import { render } from '@testing-library/react'
import { createElement } from 'react'
import { Flex } from './Flex'

const flexStyle = (props) => {
  const component = render(createElement(Flex, props))
  return component.container.querySelector('div').style
}

describe('Flex', () => {

  it('default properties', () => {
    const style = flexStyle({})
    expect(style).toHaveProperty('display', 'flex')
    expect(style).toHaveProperty('align-items', 'center')
  })

  it('display', () => {
    expect(flexStyle({ display: 'flex' })).toHaveProperty('display', 'flex')
    expect(flexStyle({ display: 'inline-flex' })).toHaveProperty('display', 'inline-flex')
    expect(flexStyle({ display: 'block' })).toHaveProperty('display', 'block')

    expect(flexStyle({ inline: true })).toHaveProperty('display', 'inline-flex')
    expect(flexStyle({ inline: false })).toHaveProperty('display', 'flex')

    expect(flexStyle({ display: 'block', inline: true })).toHaveProperty('display', 'block')
  })

  it('flex-direction', () => {
    expect(flexStyle({ flexDirection: 'row' })).toHaveProperty('flex-direction', 'row')
    expect(flexStyle({ flexDirection: 'column' })).toHaveProperty('flex-direction', 'column')
    expect(flexStyle({ flexDirection: 'row-reverse' })).toHaveProperty('flex-direction', 'row-reverse')
    expect(flexStyle({ flexDirection: 'column-reverse' })).toHaveProperty('flex-direction', 'column-reverse')

    expect(flexStyle({ direction: 'row' })).toHaveProperty('flex-direction', 'row')
    expect(flexStyle({ direction: 'column' })).toHaveProperty('flex-direction', 'column')
    expect(flexStyle({ direction: 'row-reverse' })).toHaveProperty('flex-direction', 'row-reverse')
    expect(flexStyle({ direction: 'column-reverse' })).toHaveProperty('flex-direction', 'column-reverse')

    expect(flexStyle({ flexDirection: 'row', direction: 'column' })).toHaveProperty('flex-direction', 'row')

    expect(flexStyle({ row: true })).toHaveProperty('flex-direction', 'row')
    expect(flexStyle({ col: true })).toHaveProperty('flex-direction', 'column')
    expect(flexStyle({ column: true })).toHaveProperty('flex-direction', 'column')
    expect(flexStyle({ rowReverse: true })).toHaveProperty('flex-direction', 'row-reverse')
    expect(flexStyle({ colReverse: true })).toHaveProperty('flex-direction', 'column-reverse')
    expect(flexStyle({ columnReverse: true })).toHaveProperty('flex-direction', 'column-reverse')

    expect(flexStyle({ row: true, reverse: true })).toHaveProperty('flex-direction', 'row-reverse')
    expect(flexStyle({ col: true, reverse: true })).toHaveProperty('flex-direction', 'column-reverse')
    expect(flexStyle({ column: true, reverse: true })).toHaveProperty('flex-direction', 'column-reverse')
    expect(flexStyle({ rowReverse: true, reverse: true })).toHaveProperty('flex-direction', 'row')
    expect(flexStyle({ colReverse: true, reverse: true })).toHaveProperty('flex-direction', 'column')
    expect(flexStyle({ columnReverse: true, reverse: true })).toHaveProperty('flex-direction', 'column')

    expect(flexStyle({ flexDirection: 'block', reverse: true })).toHaveProperty('flex-direction', 'block')
    expect(flexStyle({ direction: 'block', reverse: true })).toHaveProperty('flex-direction', 'block')
  })

  it('flex-wrap', () => {
    expect(flexStyle({ flexWrap: 'wrap' })).toHaveProperty('flex-wrap', 'wrap')
    expect(flexStyle({ flexWrap: 'nowrap' })).toHaveProperty('flex-wrap', 'nowrap')
    expect(flexStyle({ flexWrap: 'wrap-reverse' })).toHaveProperty('flex-wrap', 'wrap-reverse')
    expect(flexStyle({ wrap: 'wrap' })).toHaveProperty('flex-wrap', 'wrap')
    expect(flexStyle({ wrap: 'nowrap' })).toHaveProperty('flex-wrap', 'nowrap')
    expect(flexStyle({ wrap: 'wrap-reverse' })).toHaveProperty('flex-wrap', 'wrap-reverse')

    expect(flexStyle({ wrap: true })).toHaveProperty('flex-wrap', 'wrap')
    expect(flexStyle({ nowrap: true })).toHaveProperty('flex-wrap', 'nowrap')
    expect(flexStyle({ wrapReverse: true })).toHaveProperty('flex-wrap', 'wrap-reverse')

    expect(flexStyle({ flexWrap: 'wrap', nowrap: true })).toHaveProperty('flex-wrap', 'wrap')
    expect(flexStyle({ wrap: 'wrap', nowrap: true })).toHaveProperty('flex-wrap', 'wrap')
  })

  it('justify-content', () => {
    expect(flexStyle({ justifyContent: 'flex-start' })).toHaveProperty('justify-content', 'flex-start')
    expect(flexStyle({ justifyContent: 'flex-end' })).toHaveProperty('justify-content', 'flex-end')
    expect(flexStyle({ justifyContent: 'center' })).toHaveProperty('justify-content', 'center')
    expect(flexStyle({ justifyContent: 'space-between' })).toHaveProperty('justify-content', 'space-between')
    expect(flexStyle({ justifyContent: 'space-around' })).toHaveProperty('justify-content', 'space-around')
    expect(flexStyle({ justifyContent: 'space-evenly' })).toHaveProperty('justify-content', 'space-evenly')
    expect(flexStyle({ justify: 'flex-start' })).toHaveProperty('justify-content', 'flex-start')
    expect(flexStyle({ justify: 'flex-end' })).toHaveProperty('justify-content', 'flex-end')
    expect(flexStyle({ justify: 'center' })).toHaveProperty('justify-content', 'center')
    expect(flexStyle({ justify: 'space-between' })).toHaveProperty('justify-content', 'space-between')
    expect(flexStyle({ justify: 'space-around' })).toHaveProperty('justify-content', 'space-around')
    expect(flexStyle({ justify: 'space-evenly' })).toHaveProperty('justify-content', 'space-evenly')

    expect(flexStyle({ start: true })).toHaveProperty('justify-content', 'flex-start')
    expect(flexStyle({ end: true })).toHaveProperty('justify-content', 'flex-end')
    expect(flexStyle({ center: true })).toHaveProperty('justify-content', 'center')
    expect(flexStyle({ spaceBetween: true })).toHaveProperty('justify-content', 'space-between')
    expect(flexStyle({ spaceAround: true })).toHaveProperty('justify-content', 'space-around')
    expect(flexStyle({ spaceEvenly: true })).toHaveProperty('justify-content', 'space-evenly')

    expect(flexStyle({ justifyContent: 'flex-start', spaceEvenly: true })).toHaveProperty('justify-content', 'flex-start')
    expect(flexStyle({ justify: 'flex-start', spaceEvenly: true })).toHaveProperty('justify-content', 'flex-start')
  })

  it('align-items', () => {
    expect(flexStyle({ alignItems: 'flex-start' })).toHaveProperty('align-items', 'flex-start')
    expect(flexStyle({ alignItems: 'flex-end' })).toHaveProperty('align-items', 'flex-end')
    expect(flexStyle({ alignItems: 'center' })).toHaveProperty('align-items', 'center')
    expect(flexStyle({ alignItems: 'stretch' })).toHaveProperty('align-items', 'stretch')
    expect(flexStyle({ alignItems: 'baseline' })).toHaveProperty('align-items', 'baseline')
    expect(flexStyle({ align: 'flex-start' })).toHaveProperty('align-items', 'flex-start')
    expect(flexStyle({ align: 'flex-end' })).toHaveProperty('align-items', 'flex-end')
    expect(flexStyle({ align: 'center' })).toHaveProperty('align-items', 'center')
    expect(flexStyle({ align: 'stretch' })).toHaveProperty('align-items', 'stretch')
    expect(flexStyle({ align: 'baseline' })).toHaveProperty('align-items', 'baseline')

    expect(flexStyle({ alignStart: true })).toHaveProperty('align-items', 'flex-start')
    expect(flexStyle({ alignEnd: true })).toHaveProperty('align-items', 'flex-end')
    expect(flexStyle({ alignCenter: true })).toHaveProperty('align-items', 'center')
    expect(flexStyle({ alignStretch: true })).toHaveProperty('align-items', 'stretch')
    expect(flexStyle({ alignBaseline: true })).toHaveProperty('align-items', 'baseline')

    expect(flexStyle({ alignItems: 'flex-start', alignBaseline: true })).toHaveProperty('align-items', 'flex-start')
    expect(flexStyle({ align: 'flex-start', alignBaseline: true })).toHaveProperty('align-items', 'flex-start')
  })

  it('align-content', () => {
    expect(flexStyle({ alignContent: 'flex-start' })).toHaveProperty('align-content', 'flex-start')
    expect(flexStyle({ alignContent: 'flex-end' })).toHaveProperty('align-content', 'flex-end')
    expect(flexStyle({ alignContent: 'center' })).toHaveProperty('align-content', 'center')
    expect(flexStyle({ alignContent: 'stretch' })).toHaveProperty('align-content', 'stretch')
    expect(flexStyle({ alignContent: 'baseline' })).toHaveProperty('align-content', 'baseline')

    expect(flexStyle({ contentStart: true })).toHaveProperty('align-content', 'flex-start')
    expect(flexStyle({ contentEnd: true })).toHaveProperty('align-content', 'flex-end')
    expect(flexStyle({ contentCenter: true })).toHaveProperty('align-content', 'center')
    expect(flexStyle({ contentStretch: true })).toHaveProperty('align-content', 'stretch')
    expect(flexStyle({ contentSpaceBetween: true })).toHaveProperty('align-content', 'space-between')
    expect(flexStyle({ contentSpaceAround: true })).toHaveProperty('align-content', 'space-around')

    expect(flexStyle({ alignContent: 'flex-start', contentStretch: true })).toHaveProperty('align-content', 'flex-start')
  })

  it('gap', () => {
    expect(flexStyle({ gap: '0' })).toHaveProperty('gap', '0')
    expect(flexStyle({ gap: '123px' })).toHaveProperty('gap', '123px')
    expect(flexStyle({ gap: '12pt 34em' })).toHaveProperty('gap', '12pt 34em')
    expect(flexStyle({ gap: 0 })).toHaveProperty('gap', '')
    expect(flexStyle({ gap: 123 })).toHaveProperty('gap', '123px')

    const testArray1 = flexStyle({ gap: ['12px', '34px'] })
    expect(testArray1).toHaveProperty('row-gap', '12px')
    expect(testArray1).toHaveProperty('column-gap', '34px')

    const testArray2 = flexStyle({ gap: [12, 34] })
    expect(testArray2).toHaveProperty('row-gap', '12px')
    expect(testArray2).toHaveProperty('column-gap', '34px')
  })

  it('order', () => {
    expect(flexStyle({ order: '0' })).toHaveProperty('order', '0')
    expect(flexStyle({ order: '1' })).toHaveProperty('order', '1')
    expect(flexStyle({ order: '123' })).toHaveProperty('order', '123')
    expect(flexStyle({ order: 0 })).toHaveProperty('order', '0')
    expect(flexStyle({ order: 1 })).toHaveProperty('order', '1')
    expect(flexStyle({ order: 123 })).toHaveProperty('order', '123')
  })

  it('flex-grow', () => {
    expect(flexStyle({ flexGrow: '0' })).toHaveProperty('flex-grow', '0')
    expect(flexStyle({ flexGrow: '1' })).toHaveProperty('flex-grow', '1')
    expect(flexStyle({ flexGrow: '123' })).toHaveProperty('flex-grow', '123')
    expect(flexStyle({ flexGrow: 0 })).toHaveProperty('flex-grow', '0')
    expect(flexStyle({ flexGrow: 1 })).toHaveProperty('flex-grow', '1')
    expect(flexStyle({ flexGrow: 123 })).toHaveProperty('flex-grow', '123')
    expect(flexStyle({ grow: '0' })).toHaveProperty('flex-grow', '0')
    expect(flexStyle({ grow: '1' })).toHaveProperty('flex-grow', '1')
    expect(flexStyle({ grow: '123' })).toHaveProperty('flex-grow', '123')
    expect(flexStyle({ grow: 0 })).toHaveProperty('flex-grow', '0')
    expect(flexStyle({ grow: 1 })).toHaveProperty('flex-grow', '1')
    expect(flexStyle({ grow: 123 })).toHaveProperty('flex-grow', '123')

    expect(flexStyle({ grow: false })).toHaveProperty('flex-grow', '0')
    expect(flexStyle({ grow: true })).toHaveProperty('flex-grow', '1')
  })

  it('flex-shrink', () => {
    expect(flexStyle({ flexShrink: '0' })).toHaveProperty('flex-shrink', '0')
    expect(flexStyle({ flexShrink: '1' })).toHaveProperty('flex-shrink', '1')
    expect(flexStyle({ flexShrink: '123' })).toHaveProperty('flex-shrink', '123')
    expect(flexStyle({ flexShrink: 0 })).toHaveProperty('flex-shrink', '0')
    expect(flexStyle({ flexShrink: 1 })).toHaveProperty('flex-shrink', '1')
    expect(flexStyle({ flexShrink: 123 })).toHaveProperty('flex-shrink', '123')
    expect(flexStyle({ shrink: '0' })).toHaveProperty('flex-shrink', '0')
    expect(flexStyle({ shrink: '1' })).toHaveProperty('flex-shrink', '1')
    expect(flexStyle({ shrink: '123' })).toHaveProperty('flex-shrink', '123')
    expect(flexStyle({ shrink: 0 })).toHaveProperty('flex-shrink', '0')
    expect(flexStyle({ shrink: 1 })).toHaveProperty('flex-shrink', '1')
    expect(flexStyle({ shrink: 123 })).toHaveProperty('flex-shrink', '123')

    expect(flexStyle({ shrink: false })).toHaveProperty('flex-shrink', '0')
    expect(flexStyle({ shrink: true })).toHaveProperty('flex-shrink', '1')
  })

  it('flex-basis', () => {
    expect(flexStyle({ flexBasis: '0' })).toHaveProperty('flex-basis', '0px')
    expect(flexStyle({ flexBasis: '1px' })).toHaveProperty('flex-basis', '1px')
    expect(flexStyle({ flexBasis: '100%' })).toHaveProperty('flex-basis', '100%')
    expect(flexStyle({ flexBasis: 0 })).toHaveProperty('flex-basis', '0px')
    expect(flexStyle({ flexBasis: 1 })).toHaveProperty('flex-basis', '1px')
    expect(flexStyle({ flexBasis: 123 })).toHaveProperty('flex-basis', '123px')
    expect(flexStyle({ basis: '0' })).toHaveProperty('flex-basis', '0px')
    expect(flexStyle({ basis: '1px' })).toHaveProperty('flex-basis', '1px')
    expect(flexStyle({ basis: '100%' })).toHaveProperty('flex-basis', '100%')
    expect(flexStyle({ basis: 0 })).toHaveProperty('flex-basis', '0px')
    expect(flexStyle({ basis: 1 })).toHaveProperty('flex-basis', '1px')
    expect(flexStyle({ basis: 123 })).toHaveProperty('flex-basis', '123px')
  })

  it('align-self', () => {
    expect(flexStyle({ alignSelf: 'flex-start' })).toHaveProperty('align-self', 'flex-start')
    expect(flexStyle({ alignSelf: 'flex-end' })).toHaveProperty('align-self', 'flex-end')
    expect(flexStyle({ alignSelf: 'center' })).toHaveProperty('align-self', 'center')
    expect(flexStyle({ alignSelf: 'stretch' })).toHaveProperty('align-self', 'stretch')
    expect(flexStyle({ alignSelf: 'baseline' })).toHaveProperty('align-self', 'baseline')
    expect(flexStyle({ self: 'flex-start' })).toHaveProperty('align-self', 'flex-start')
    expect(flexStyle({ self: 'flex-end' })).toHaveProperty('align-self', 'flex-end')
    expect(flexStyle({ self: 'center' })).toHaveProperty('align-self', 'center')
    expect(flexStyle({ self: 'stretch' })).toHaveProperty('align-self', 'stretch')
    expect(flexStyle({ self: 'baseline' })).toHaveProperty('align-self', 'baseline')

    expect(flexStyle({ selfStart: true })).toHaveProperty('align-self', 'flex-start')
    expect(flexStyle({ selfEnd: true })).toHaveProperty('align-self', 'flex-end')
    expect(flexStyle({ selfCenter: true })).toHaveProperty('align-self', 'center')
    expect(flexStyle({ selfStretch: true })).toHaveProperty('align-self', 'stretch')
    expect(flexStyle({ selfBaseline: true })).toHaveProperty('align-self', 'baseline')

    expect(flexStyle({ alignSelf: 'flex-start', selfBaseline: true })).toHaveProperty('align-self', 'flex-start')
    expect(flexStyle({ self: 'flex-start', selfBaseline: true })).toHaveProperty('align-self', 'flex-start')
  })

})
