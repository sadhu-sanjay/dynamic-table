import { FieldOption } from "~/models/field";

export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
export const RECORDS_FETCH_URL = `${SERVER_URL}/api/fake`;
console.warn("SERVER URL ==>", SERVER_URL)
export const LIVE_EVENTS_URL = `${SERVER_URL}/events`;

export const visibleColumns: Array<FieldOption> = [
    { value: 'RecordKey', label: 'Record Key' },
    { value: 'Region', label: 'Region' },
    { value: 'Title', label: 'Title' },
    { value: 'SearchString', label: 'Search String' },
    { value: 'lat', label: 'Latitude' },
    { value: 'lng', label: 'Longitude' },
    { value: 'Tags', label: 'Tags' }
];

export const NO_RECORDS_TRY_AGAIN = "No Records found. Please try again in a moment"

