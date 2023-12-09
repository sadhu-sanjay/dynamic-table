import { Field } from "~/models/field"

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
    label: "Status",
    name: "status",
    filterKey: "status",
    value: "",
    isRequired: false,
    isDisabled: false,
    isSearchable: false,
    isMulti: false,
    options: [
      {
        label: "Active",
        value: "active"
      },
      {
        label: "Inactive",
        value: "inactive"
      }
    ],
    category: "filter"
  }
]

export default filterConfig