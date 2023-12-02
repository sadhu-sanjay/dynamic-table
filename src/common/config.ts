import { DropdownOption } from "../models/types";

export const SERVER_URL = 'https://sanjaygoswami.online';
export const RECORDS_FETCH_URL = `${SERVER_URL}/api/fake`;

export const visibleColumns: Array<DropdownOption> = [
    { value: 'RecordKey', label: 'Record Key' },
    { value: 'Region', label: 'Region' },
    { value: 'Title', label: 'Title' },
    { value: 'SearchString', label: 'Search String' },
    { value: 'lat', label: 'Latitude' },
    { value: 'lng', label: 'Longitude' },
    { value: 'Tags', label: 'Tags' }
];

export const NO_RECORDS_TRY_AGAIN = "No Records found. Please try again in a moment"

// Base Configuration for dynamic filters 
export const dynamicFiltersConfig = {
    Region: {
        type: 'dropdown',
        label: 'Region',
        options: [
            { value: 'Asia', label: 'Asia' },
            { value: 'Europe', label: 'Europe' },
            { value: 'Africa', label: 'Africa' },
            { value: 'North America', label: 'North America' },
            { value: 'South America', label: 'South America' },
            { value: 'Oceania', label: 'Oceania' },
            { value: 'Antarctica', label: 'Antarctica' }
        ]
    },
    Title: {
        type: 'text',
        label: 'Title'
    },
    SearchString: {
        type: 'text',
        label: 'Search String'
    },
    lat: {
        type: 'number',
        label: 'Latitude'
    },
    lng: {
        type: 'number',
        label: 'Longitude'
    },
    Tags: {
        type: 'text',
        label: 'Tags'
    }
}