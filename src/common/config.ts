import { FieldOption } from "../models/types";
import { Field } from "~/models/field";

export const SERVER_URL = 'https://sanjaygoswami.online';
export const RECORDS_FETCH_URL = `${SERVER_URL}/api/fake`;

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

