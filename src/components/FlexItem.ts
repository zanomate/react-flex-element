import { createElement, CSSProperties } from 'react'
import { alignSelfProperty } from '../properties/alignSelfProperty'
import { flexBasisProperty } from '../properties/flexBasisProperty'
import { flexGrowProperty } from '../properties/flexGrowProperty'
import { flexShrinkProperty } from '../properties/flexShrinkProperty'
import { orderProperty } from '../properties/orderProperty'
import { ItemProps } from '../types/ItemProps'
import { StyledElement, StyledElementProps, WithStyle } from './StyledElement'

export type FlexItemProps<P extends WithStyle> = ItemProps & StyledElementProps<P>

export const FlexItem = <P extends WithStyle>(props: FlexItemProps<P>) => {
  const {
    order,
    flexGrow, grow,
    flexShrink, shrink,
    flexBasis, basis,
    alignSelf, self, selfStart, selfEnd, selfCenter, selfStretch, selfBaseline,
    ...otherProps
  } = props

  const injectedStyle: CSSProperties = {
    order: orderProperty(order, undefined),
    flexGrow: flexGrowProperty(flexGrow, grow, undefined),
    flexShrink: flexShrinkProperty(flexShrink, shrink, undefined),
    flexBasis: flexBasisProperty(flexBasis, basis, undefined),
    alignSelf: alignSelfProperty(alignSelf, self, selfStart, selfEnd, selfCenter, selfStretch, selfBaseline, undefined),
  }

  return createElement(StyledElement, {
    ...otherProps as StyledElementProps<P>,
    injectedStyle,
  })
}

FlexItem.defaultProps = {
  as: 'div',
}
