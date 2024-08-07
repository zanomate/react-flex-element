import React, { createElement, CSSProperties, ForwardedRef, forwardRef } from 'react'
import { alignContentProperty } from '../properties/alignContentProperty'
import { alignItemsProperty } from '../properties/alignItemsProperty'
import { alignSelfProperty } from '../properties/alignSelfProperty'
import { displayProperty } from '../properties/displayProperty'
import { flexBasisProperty } from '../properties/flexBasisProperty'
import { flexDirectionProperty } from '../properties/flexDirectionProperty'
import { flexGrowProperty } from '../properties/flexGrowProperty'
import { flexShrinkProperty } from '../properties/flexShrinkProperty'
import { flexWrapProperty } from '../properties/flexWrapProperty'
import { gapProperties } from '../properties/gap'
import { heightProperty } from '../properties/heightProperty'
import { justifyContentProperty } from '../properties/justifyContentProperty'
import { orderProperty } from '../properties/orderProperty'
import { widthProperty } from '../properties/widthProperty'
import { ContainerProps } from '../types/ContainerProps'
import { ItemProps } from '../types/ItemProps'
import { As, StyledElement, StyledElementProps, WithStyle } from './StyledElement'

export type FlexProps<P extends WithStyle> = Omit<React.PropsWithChildren<P & ContainerProps & ItemProps>, 'as'> & {
  as?: As<P>
}

const FlexInner = <T, P extends WithStyle>(props: FlexProps<P>, ref: ForwardedRef<T>) => {
  const {
    as = 'div',
    display, inline,
    flexDirection, direction, row, col, column, rowReverse, colReverse, columnReverse, reverse,
    flexWrap, wrap, nowrap, wrapReverse,
    justifyContent, justify, start, end, center, spaceBetween, spaceAround, spaceEvenly,
    alignItems, align, alignStart, alignEnd, alignCenter, stretch, alignStretch, baseline, alignBaseline,
    alignContent, contentStart, contentEnd, contentCenter, contentStretch, contentSpaceBetween, contentSpaceAround,
    order,
    flexGrow, grow,
    flexShrink, shrink,
    flexBasis, basis,
    alignSelf, self, selfStart, selfEnd, selfCenter, selfStretch, selfBaseline,
    gap,
    rowGap,
    columnGap, colGap,
    fill,
    ...otherProps
  } = props

  const injectedStyle: CSSProperties = {
    display: displayProperty(display, inline, 'flex'),
    flexDirection: flexDirectionProperty(flexDirection, direction, row, col, column, rowReverse, colReverse, columnReverse, reverse, undefined),
    flexWrap: flexWrapProperty(flexWrap, wrap, nowrap, wrapReverse, undefined),
    justifyContent: justifyContentProperty(justifyContent, justify, start, end, center, spaceBetween, spaceAround, spaceEvenly, undefined),
    alignItems: alignItemsProperty(alignItems, align, alignStart, alignEnd, alignCenter, stretch, alignStretch, baseline, alignBaseline, 'center'),
    alignContent: alignContentProperty(alignContent, contentStart, contentEnd, contentCenter, contentStretch, contentSpaceBetween, contentSpaceAround, undefined),
    ...gapProperties(rowGap, columnGap, colGap, gap, {}),
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
    as,
    ref,
    injectedStyle,
  })
}

export const Flex = forwardRef(FlexInner) as <T extends HTMLElement, P extends WithStyle>(
  props: FlexProps<P> & { ref?: React.ForwardedRef<T> },
) => ReturnType<typeof FlexInner>
