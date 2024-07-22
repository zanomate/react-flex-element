import React, { CSSProperties, FunctionComponent, ComponentClass } from 'react';
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
type As<P extends WithStyle> = string | FunctionComponent<P> | ComponentClass<P>;

type FlexProps<P extends WithStyle> = Omit<React.PropsWithChildren<P & ContainerProps & ItemProps>, 'as'> & {
    as?: As<P>;
};
declare const Flex: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<WithStyle & ContainerProps & ItemProps>, "as"> & {
    as?: As<WithStyle>;
} & React.RefAttributes<unknown>>;

type FlexItemProps<P extends WithStyle> = Omit<React.PropsWithChildren<P & ItemProps>, 'as'> & {
    as?: As<P>;
};
declare const FlexItem: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<WithStyle & ItemProps>, "as"> & {
    as?: As<WithStyle>;
} & React.RefAttributes<unknown>>;

export { type As, type ContainerProps, Flex, FlexItem, type FlexItemProps, type FlexProps, type ItemProps, type WithStyle };
