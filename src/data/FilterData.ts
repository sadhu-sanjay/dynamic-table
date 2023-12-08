import { Field } from "~/models/field"

const filterConfig: Array<Field> = [
  {
    order: 1,
    type: "search",
    label: "Search",
    name: "search",
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
    type: "select",
    label: "Status",
    name: "status",
    value: "",
    isRequired: false,
    isDisabled: false,
    isSearchable: false,
    isMulti: false,
    options: [
      { value: "all", label: "All" },
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }
    ],
    category: "filter"
  },
  {
    order: 3,
    type: "select",
    label: "Type",
    name: "type",
    value: "",
    isRequired: false,
    isDisabled: false,
    isSearchable: false,
    isMulti: false,
    options: [
      { value: "all", label: "All" },
      { value: "type1", label: "Type 1" },
      { value: "type2", label: "Type 2" }
    ],
    category: "filter"
  },
  {
    order: 4,
    type: "select",
    label: "Category",
    name: "category",
    value: "",
    isRequired: false,
    isDisabled: false,
    isSearchable: false,
    isMulti: false,
    options: [
      { value: "all", label: "All" },
      { value: "category1", label: "Category 1" },
      { value: "category2", label: "Category 2" }
    ],
    category: "filter"
  },
  {
    order: 5,
    type: "select",
    label: "Priority",
    name: "priority",
    value: "",
    isRequired: false,
    isDisabled: false,
    isSearchable: false,
    isMulti: false,
    options: [
      { value: "all", label: "All" },
      { value: "priority1", label: "Priority 1" },
    ],
    category: "filter"
  },

];

