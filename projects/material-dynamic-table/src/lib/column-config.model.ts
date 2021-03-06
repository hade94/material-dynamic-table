﻿export class ColumnConfig {
    name?: string;
    displayName?: string;
    type: string;
    options?: any;
    sticky?: string;
    sort?: boolean;
    onClick?: (row: any) => unknown = (row) => {return;};
}