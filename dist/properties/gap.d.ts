import { Property } from 'csstype';
import { CSSProperties } from 'react';
export declare const rowGapProperty: (rowGap: Property.RowGap | undefined, defaultValue: Property.RowGap) => Property.RowGap;
export declare const columnGapProperty: (columnGap: Property.ColumnGap | undefined, colGap: Property.ColumnGap | undefined, defaultValue: Property.ColumnGap) => Property.ColumnGap;
export declare const gapProperties: (rowGap: Property.RowGap | undefined, columnGap: Property.ColumnGap | undefined, colGap: Property.ColumnGap | undefined, gap: Property.Gap | Property.Gap[] | undefined, defaultPropertiesValues: CSSProperties) => CSSProperties;
