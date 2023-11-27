import { DropdownOption } from "../models/types";

export const SERVER_URL = 'https://sanjaygoswami.online';
export const RECORDS_FETCH_URL = `${SERVER_URL}/api/records`;
export const ITALY_VIEW_URL = `${RECORDS_FETCH_URL}?viewKey=viwJ1RUrFc3Ahb1hk`;

export const visibleColumns: Array<DropdownOption> = [
    { value: 'RecordKey', label: 'Record Key' },
    { value: 'Region', label: 'Region' },
    { value: 'Title', label: 'Title' },
    { value: 'SearchString', label: 'Search String' },
    { value: 'lat', label: 'Latitude' },
    { value: 'lng', label: 'Longitude' },
    { value: 'Tags', label: 'Tags' }
];
