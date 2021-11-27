/// <reference types="react" />
import { ItemProps } from '../types/ItemProps';
import { StyledElementProps, WithStyle } from './StyledElement';
export declare type FlexItemProps<P extends WithStyle> = ItemProps & StyledElementProps<P>;
export declare const FlexItem: {
    <P extends WithStyle>(props: FlexItemProps<P>): import("react").FunctionComponentElement<WithStyle & import("./StyledElement").StyledElementAsProps<WithStyle>>;
    defaultProps: {
        as: string;
    };
};
