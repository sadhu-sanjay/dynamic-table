import { Field } from "~/models/field";
import { Operators, useFilters } from "~/providers/filter-provider";
import config from "~/filters-config.json";
import { useState } from "react";
import DropdownMultiSelect from "../Molecules/dropdown-multiSelect";
import Searchbar from "../Molecules/searchbar";
import { Dropdown } from "../Molecules/dropdown";
import Checkbox from "../Molecules/checkbox";
const fields: Field[] = config as Field[];
fields.sort((a, b) => a.order - b.order);

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
        <div className="flex gap-4 p-4 flex-row justify-center">
          {fields.map((field, index) => {
            <label htmlFor={field.name}>{field.label}</label>;
            switch (field.type) {
              case "search":
                return (
                  <Searchbar
                    key={index}
                    onChange={(value) => console.log(value)}
                  />
                );
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
              case "boolean":
                return <Checkbox label={field.name} onChange={(value) => {}} />;
              case "select":
                return (
                  <Dropdown
                    label={field.name}
                    placeholder={field.label}
                    options={field.options}
                    isLoading={false}
                    onItemSelected={(item) => console.log(item)}
                    key={index}
                  />
                );
              case "multi-select":
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
        </div>
      </form>
    </>
  );
};

export default DynamicFilters;
