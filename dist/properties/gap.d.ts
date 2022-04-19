import { Property } from 'csstype';
import { CSSProperties } from 'react';
export declare const rowGapProperty: (rowGap: Property.RowGap<number> | undefined, defaultValue: Property.RowGap<number>) => Property.RowGap<number>;
export declare const columnGapProperty: (columnGap: Property.ColumnGap<number> | undefined, colGap: Property.ColumnGap<number> | undefined, defaultValue: Property.ColumnGap<number>) => Property.ColumnGap<number>;
export declare const gapProperties: (rowGap: Property.RowGap<number> | undefined, columnGap: Property.ColumnGap<number> | undefined, colGap: Property.ColumnGap<number> | undefined, gap: Property.Gap<number> | Property.Gap<number>[] | undefined, defaultPropertiesValues: CSSProperties) => CSSProperties;
