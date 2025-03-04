import { createElement, CSSProperties, ForwardedRef, forwardRef, PropsWithChildren } from 'react'
import { Diff } from 'utility-types'
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

type FlexBaseProps = ContainerProps & ItemProps

type FlexInnerProps<CustomProps extends WithStyle> = Omit<PropsWithChildren<FlexBaseProps & Diff<CustomProps, FlexBaseProps>>, 'as'> & {
  as?: As<CustomProps>
}

const FlexInner = <DomElement extends HTMLElement, CustomProps extends WithStyle>(props: FlexInnerProps<CustomProps>, ref: ForwardedRef<DomElement>) => {
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
    ...otherProps as StyledElementProps<DomElement, CustomProps>,
    as,
    ref,
    injectedStyle,
  })
}

export type FlexProps<DomElement extends HTMLElement, CustomProps extends WithStyle> = FlexInnerProps<CustomProps> & { ref?: React.ForwardedRef<DomElement> }

export const Flex = forwardRef(FlexInner) as <DomElement extends HTMLElement, CustomProps extends WithStyle>(
  props: FlexProps<DomElement, CustomProps>,
) => ReturnType<typeof FlexInner>
