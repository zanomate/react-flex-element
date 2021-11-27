import { Property } from 'csstype';
export interface ItemProps {
    order?: Property.Order;
    flexGrow?: Property.FlexGrow;
    grow?: Property.FlexGrow;
    flexShrink?: Property.FlexShrink;
    shrink?: Property.FlexShrink;
    flexBasis?: Property.FlexBasis;
    basis?: Property.FlexBasis;
    alignSelf?: Property.AlignSelf;
    self?: Property.AlignSelf;
    selfStart?: boolean;
    selfEnd?: boolean;
    selfCenter?: boolean;
    selfStretch?: boolean;
    selfBaseline?: boolean;
}
