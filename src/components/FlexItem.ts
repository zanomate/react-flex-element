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

type FlexItemInnerProps<CustomProps extends WithStyle> = Omit<React.PropsWithChildren<CustomProps & ItemProps>, 'as'> & {
  as?: As<CustomProps>
}

const FlexItemInner = <DomElement extends HTMLElement, CustomProps extends WithStyle>(props: FlexItemInnerProps<CustomProps>, ref: ForwardedRef<DomElement>) => {
  const {
    as = 'div',
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
    ...otherProps as StyledElementProps<DomElement, CustomProps>,
    as,
    ref,
    injectedStyle,
  })
}

export type FlexItemProps<DomElement extends HTMLElement, CustomProps extends WithStyle> = FlexItemInnerProps<CustomProps> & { ref?: React.ForwardedRef<DomElement> }

export const FlexItem = forwardRef(FlexItemInner) as <DomElement extends HTMLElement, CustomProps extends WithStyle>(
  props: FlexItemProps<DomElement, CustomProps>,
) => ReturnType<typeof FlexItemInner>
