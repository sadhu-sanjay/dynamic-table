import { FunctionComponent, ReactElement } from "react";

export type NavItem = {
    id: string;
    label: string;
    path: string;
    icon?: ReactElement;
    badge?: string;
};

export type SortConfig = {
    key: string;
    direction: string;
};

export type Record = {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    description: string;
};

