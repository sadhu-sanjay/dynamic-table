export type FieldOption = {
    value: string;
    label: string;
};

type FieldCategory = "table" | "filter" | "form";

/**
 * Represents a field with various properties.
 * @typedef {Object} Field
 * @property {FieldCategory} category - The category of the field. to decide wheather the field belongs 
 * to table, filter or form.
 */
export type Field = {
    // type: "text" | "number" | "date" | "select" | "boolean" | "multi-select" | "radio" | "checkbox" | "button" | "color" | "datetime-local" | "email" | "image" | "month" | "range" | "search" | "tel" | "url" | "week" | "file";
    order: number;
    type: "search" | "number" | "date" | "select" | "boolean" | "multi-select";
    label: string;
    name: string;
    value?: string | number | boolean | string[];
    isRequired?: boolean;
    isDisabled?: boolean;
    isSearchable?: boolean;
    isMulti?: boolean;
    options: FieldOption[];
    category: FieldCategory;
};
