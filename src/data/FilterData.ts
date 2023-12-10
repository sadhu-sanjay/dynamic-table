import { Field } from "~/models/field"

const dropdownOptions = [
  { label: "Polar Regions", value: "viw6ornI6J4YbM8UQ" },
  { label: "Africa", value: "viwfCZKDcjy9h4Zqn" },
  { label: "Central Africa", value: "viww0tzce9rfSB054" },
  { label: "East Africa", value: "viw3F9zNVpcmH3nAU" },
  { label: "North Africa", value: "viwcrjtsAJe0lBDr5" },
  { label: "Southern Africa", value: "viwr7V1l3Td8vkGMt" },
  { label: "West Africa", value: "viwYkqAWRxfcXQ0Mx" },
  { label: "Asia", value: "viw5oPgOBirnoLJ4l" },
  { label: "Central Asia", value: "viw0liZ3g7qhoI8Tj" },
  { label: "Northern Asia", value: "viwhgQF9JzjVKLH8F" },
  { label: "North America", value: "viwhgQF9JzjsdLH8F" }
];

const filterConfig: Array<Field> = [
  {
    order: 1,
    type: "search",
    label: "Search",
    name: "search",
    filterKey: "Title",
    value: "",
    isRequired: false,
    isDisabled: false,
    isSearchable: true,
    isMulti: false,
    options: [],
    category: "filter"
  },
  {
    order: 2,
    type: "multi-select",
    label: "Regions",
    name: "regions",
    filterKey: "Region",
    value: "",
    isRequired: false,
    isDisabled: false,
    isSearchable: false,
    isMulti: false,
    options: dropdownOptions,
    category: "filter"
  }
]

export default filterConfig



