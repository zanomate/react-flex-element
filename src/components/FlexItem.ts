import React, { createElement, CSSProperties, ForwardedRef, forwardRef } from 'react'
import { alignSelfProperty } from '../properties/alignSelfProperty'
import { flexBasisProperty } from '../properties/flexBasisProperty'
import { flexGrowProperty } from '../properties/flexGrowProperty'
import { flexShrinkProperty } from '../properties/flexShrinkProperty'
import { heightProperty } from '../properties/heightProperty'
import { orderProperty } from '../properties/orderProperty'
import { widthProperty } from '../properties/widthProperty'
import { ItemProps } from '../types/ItemProps'
import { As, StyledElement, StyledElementProps, WithStyle } from './StyledElement'

export type FlexItemProps<P extends WithStyle> = Omit<React.PropsWithChildren<P & ItemProps>, 'as'> & {
  as?: As<P>
}

export const FlexItem = forwardRef(<T, P extends WithStyle>(props: FlexItemProps<P>, ref: ForwardedRef<T>) => {
  const {
    order,
    flexGrow, grow,
    flexShrink, shrink,
    flexBasis, basis,
    alignSelf, self, selfStart, selfEnd, selfCenter, selfStretch, selfBaseline,
    fill,
    ...otherProps
  } = props

  const injectedStyle: CSSProperties = {
    order: orderProperty(order, undefined),
    flexGrow: flexGrowProperty(flexGrow, grow, undefined),
    flexShrink: flexShrinkProperty(flexShrink, shrink, undefined),
    flexBasis: flexBasisProperty(flexBasis, basis, undefined),
    alignSelf: alignSelfProperty(alignSelf, self, selfStart, selfEnd, selfCenter, selfStretch, selfBaseline, undefined),
    width: widthProperty(fill, undefined),
    height: heightProperty(fill, undefined),
  }

  return createElement(StyledElement, {
    ...otherProps as StyledElementProps<P>,
    ref,
    injectedStyle,
  })
})

FlexItem.defaultProps = {
  as: 'div',
}
