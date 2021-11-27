import React, { ComponentClass, CSSProperties, FunctionComponent } from 'react';
export interface WithStyle {
    style?: CSSProperties;
}
export declare type As<P extends WithStyle> = string | FunctionComponent<P> | ComponentClass<P>;
export interface StyledElementAsProps<P extends WithStyle> {
    as: As<P>;
    injectedStyle: CSSProperties;
}
export declare type StyledElementProps<P extends WithStyle> = React.PropsWithChildren<P & StyledElementAsProps<P>>;
export declare const StyledElement: <P extends WithStyle>(props: StyledElementProps<P>) => React.ReactElement<P, string | React.JSXElementConstructor<any>>;
