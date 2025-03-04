import * as React$1 from 'react';
import React__default, { CSSProperties, FunctionComponent, ComponentClass, ForwardedRef, PropsWithChildren } from 'react';
import { Diff } from 'utility-types';
import { Property } from 'csstype';

interface ContainerProps {
    display?: Property.Display;
    inline?: boolean;
    flexDirection?: Property.FlexDirection;
    direction?: Property.FlexDirection;
    row?: boolean;
    col?: boolean;
    column?: boolean;
    rowReverse?: boolean;
    colReverse?: boolean;
    columnReverse?: boolean;
    reverse?: boolean;
    flexWrap?: Property.FlexWrap;
    wrap?: Property.FlexWrap | boolean;
    nowrap?: boolean;
    wrapReverse?: boolean;
    justifyContent?: Property.JustifyContent;
    justify?: Property.JustifyContent;
    start?: boolean;
    end?: boolean;
    center?: boolean;
    spaceBetween?: boolean;
    spaceAround?: boolean;
    spaceEvenly?: boolean;
    alignItems?: Property.AlignItems;
    align?: Property.AlignItems;
    alignStart?: boolean;
    alignEnd?: boolean;
    alignCenter?: boolean;
    stretch?: boolean;
    alignStretch?: boolean;
    baseline?: boolean;
    alignBaseline?: boolean;
    alignContent?: Property.AlignContent;
    contentStart?: boolean;
    contentEnd?: boolean;
    contentCenter?: boolean;
    contentStretch?: boolean;
    contentSpaceBetween?: boolean;
    contentSpaceAround?: boolean;
    gap?: Property.Gap<number> | Property.Gap<number>[];
    rowGap?: Property.RowGap<number>;
    columnGap?: Property.ColumnGap<number>;
    colGap?: Property.ColumnGap<number>;
}

type FillValue = boolean | 'x' | 'y' | 'page' | 'page-x' | 'page-y';
interface ItemProps {
    order?: Property.Order;
    flexGrow?: Property.FlexGrow;
    grow?: Property.FlexGrow | boolean;
    flexShrink?: Property.FlexShrink;
    shrink?: Property.FlexShrink | boolean;
    flexBasis?: Property.FlexBasis;
    basis?: Property.FlexBasis;
    alignSelf?: Property.AlignSelf;
    self?: Property.AlignSelf;
    selfStart?: boolean;
    selfEnd?: boolean;
    selfCenter?: boolean;
    selfStretch?: boolean;
    selfBaseline?: boolean;
    fill?: FillValue;
}

interface WithStyle {
    style?: CSSProperties;
}
type As<CustomProps extends WithStyle = WithStyle> = string | FunctionComponent<CustomProps> | ComponentClass<CustomProps>;
interface StyledElementAsProps<CustomProps extends WithStyle> {
    as: As<CustomProps>;
    injectedStyle: CSSProperties;
}
type StyledElementInnerProps<CustomProps extends WithStyle> = React__default.PropsWithChildren<CustomProps & StyledElementAsProps<CustomProps>>;
type StyledElementProps<DomElement extends HTMLElement, CustomProps extends WithStyle> = StyledElementInnerProps<CustomProps> & {
    ref?: ForwardedRef<DomElement>;
};

type FlexBaseProps = ContainerProps & ItemProps;
type FlexInnerProps<CustomProps extends WithStyle> = Omit<PropsWithChildren<FlexBaseProps & Diff<CustomProps, FlexBaseProps>>, 'as'> & {
    as?: As<CustomProps>;
};
declare const FlexInner: <DomElement extends HTMLElement, CustomProps extends WithStyle>(props: FlexInnerProps<CustomProps>, ref: ForwardedRef<DomElement>) => React$1.FunctionComponentElement<StyledElementProps<HTMLElement, WithStyle>>;
type FlexProps<DomElement extends HTMLElement, CustomProps extends WithStyle> = FlexInnerProps<CustomProps> & {
    ref?: React.ForwardedRef<DomElement>;
};
declare const Flex: <DomElement extends HTMLElement, CustomProps extends WithStyle>(props: FlexProps<DomElement, CustomProps>) => ReturnType<typeof FlexInner>;

type FlexItemInnerProps<CustomProps extends WithStyle> = Omit<React__default.PropsWithChildren<CustomProps & ItemProps>, 'as'> & {
    as?: As<CustomProps>;
};
declare const FlexItemInner: <DomElement extends HTMLElement, CustomProps extends WithStyle>(props: FlexItemInnerProps<CustomProps>, ref: React__default.ForwardedRef<DomElement>) => React__default.FunctionComponentElement<StyledElementProps<HTMLElement, WithStyle>>;
type FlexItemProps<DomElement extends HTMLElement, CustomProps extends WithStyle> = FlexItemInnerProps<CustomProps> & {
    ref?: React__default.ForwardedRef<DomElement>;
};
declare const FlexItem: <DomElement extends HTMLElement, CustomProps extends WithStyle>(props: FlexItemProps<DomElement, CustomProps>) => ReturnType<typeof FlexItemInner>;

export { type As, type ContainerProps, Flex, FlexItem, type FlexItemProps, type FlexProps, type ItemProps, type WithStyle };
