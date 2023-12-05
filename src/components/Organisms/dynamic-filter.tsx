import { Field } from "~/models/types";
import { Operators, useFilters } from "~/providers/filter-provider";
import config from "~/filters-config.json";
import { useState } from "react";
import DropdownMultiSelect from "../Molecules/dropdown-multiSelect";
import Searchbar from "../Molecules/searchbar";
const fields: Field[] = config as Field[];

const DynamicFilters = (props: {
  fields: Field[];
  onStateChange: (newState: any) => void;
}) => {
  const [formValues, setFormValues] = useState<{ [key: string]: any }>({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formValues);
  };

  const handleChange = (name: string, value: any) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => {
          <label htmlFor={field.name}>{field.label}</label>;
          switch (field.type) {
            case "number":
              return (
                <div id={field.name} key={field.name}>
                  implement
                </div>
              );
            case "date":
              return (
                <div id={field.name} key={field.name}>
                  implement
                </div>
              );
            case "text":
              return (
                <Searchbar
                  key={index}
                  onChange={(value) => console.log(value)}
                />
              );
            case "select":
              return (
                <DropdownMultiSelect
                  label={field.name}
                  options={field.options}
                  onSelected={(selectedItems) => {
                    console.log(selectedItems);
                  }}
                  key={index}
                  isLoading={false}
                />
              );
            default:
              return <div key={field.name}>Sanjay</div>;
          }
        })}
      </form>
    </>
  );
};

export default DynamicFilters;
