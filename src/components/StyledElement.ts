import React, { ComponentClass, createElement, CSSProperties, FunctionComponent } from 'react'

export interface WithStyle {
  style?: CSSProperties
}

export type As<P extends WithStyle> = string | FunctionComponent<P> | ComponentClass<P>

export interface StyledElementAsProps<P extends WithStyle> {
  as: As<P>
  injectedStyle: CSSProperties
}

export type StyledElementProps<P extends WithStyle> = React.PropsWithChildren<P & StyledElementAsProps<P>>


export const StyledElement = <P extends WithStyle>(props: StyledElementProps<P>) => {
  const { as: AsElement, injectedStyle, ...otherProps } = props

  const asProps = otherProps as P

  const style = {
    ...asProps?.style,
    ...injectedStyle,
  }

  return createElement(AsElement, {
    ...asProps,
    style,
  })
}
