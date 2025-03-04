import React, { ComponentClass, createElement, CSSProperties, ForwardedRef, forwardRef, FunctionComponent } from 'react'

export interface WithStyle {
  style?: CSSProperties
}

export type As<CustomProps extends WithStyle = WithStyle> = string | FunctionComponent<CustomProps> | ComponentClass<CustomProps>

export interface StyledElementAsProps<CustomProps extends WithStyle> {
  as: As<CustomProps>
  injectedStyle: CSSProperties
}

type StyledElementInnerProps<CustomProps extends WithStyle> = React.PropsWithChildren<CustomProps & StyledElementAsProps<CustomProps>>


const StyledElementInner = <DomElement extends HTMLElement, CustomProps extends WithStyle>(props: StyledElementInnerProps<CustomProps>, ref: ForwardedRef<DomElement>) => {
  const { as: AsElement, injectedStyle, ...otherProps } = props

  const asProps = otherProps as CustomProps

  const style = {
    ...asProps?.style,
    ...injectedStyle,
  }

  return createElement(AsElement, {
    ...asProps,
    ref,
    style,
  })
}

export type StyledElementProps<DomElement extends HTMLElement, CustomProps extends WithStyle> = StyledElementInnerProps<CustomProps> & { ref?: ForwardedRef<DomElement> }

export const StyledElement = forwardRef(StyledElementInner) as <DomElement extends HTMLElement, CustomProps extends WithStyle>(
  props: StyledElementProps<DomElement, CustomProps>,
) => ReturnType<typeof StyledElementInner>
