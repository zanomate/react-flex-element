import React from 'react';
import { ContainerProps } from '../types/ContainerProps';
import { ItemProps } from '../types/ItemProps';
import { As, WithStyle } from './StyledElement';
export declare type FlexProps<P extends WithStyle> = React.PropsWithChildren<P & ContainerProps & ItemProps> & {
    as?: As<P>;
};
export declare const Flex: {
    <P extends WithStyle>(props: FlexProps<P>): React.FunctionComponentElement<WithStyle & import("./StyledElement").StyledElementAsProps<WithStyle>>;
    defaultProps: {
        as: string;
    };
};
