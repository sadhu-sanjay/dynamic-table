export type DropdownOption = {
    value: string;
    label: string;
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

export type Field = {
    type: "text" | "number" | "date" | "select" | "boolean";
    label: string;
    name: string;
    value?: string | number | boolean | string[];
    isRequired?: boolean;
    isDisabled?: boolean;
    isSearchable?: boolean;
    isMulti?: boolean;
    options: DropdownOption[];
};
