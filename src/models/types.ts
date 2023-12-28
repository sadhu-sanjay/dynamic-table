import { FunctionComponent } from "react";

export type NavItem = {
    id: string;
    label: string;
    path: string;
    icon?: FunctionComponent<React.SVGProps<SVGSVGElement>>,
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

