import { DropdownOption } from "../models/types";

export const RECORDS_FETCH_URL = 'https://sanjaygoswami.online/api/records?viewKey=viwJ1RUrFc3Ahb1hk';


export const visibleColumns: Array<DropdownOption> = [
    { value: 'name', label: 'Product Name' },
    { value: 'color', label: 'Color' },
    { value: 'category', label: 'Category' },
    { value: 'price', label: 'Price' },
    { value: 'inStock', label: 'In Stock' },
    { value: 'onSale', label: 'On Sale' },
    { value: 'weight', label: 'Weight' }
];
