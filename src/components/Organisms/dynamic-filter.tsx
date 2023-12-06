import { Field } from "~/models/field";
import { Operators, useFilters } from "~/providers/filter-provider";
import { useState } from "react";
import DropdownMultiSelect from "../Molecules/dropdown-multiSelect";
import Searchbar from "../Molecules/searchbar";
import { Dropdown } from "../Molecules/dropdown";
import Checkbox from "../Molecules/checkbox";

type FilterProps = {
  filterFields: Array<Field>;
  className?: string;
  onSearch?: (term: string) => void;
  filterProps?: Array<Field>;
};

const DynamicFiltersList: React.FC<FilterProps> = ({
  filterFields,
  className,
  onSearch,
  filterProps = [],
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
      <div className="flex gap-4 p-4 flex-row justify-between">
        {filterFields.map((field, index) => {
          <label htmlFor={field.name}>{field.label}</label>;
          switch (field.type) {
            case "search":
              return (
                <Searchbar
                  key={index}
                  onSearch={(value) => {
                    console.log(value);
                  }}
                />
              );
            case "number":
              return <div key={index}>implement</div>;
            case "date":
              return <div key={index}>implement</div>;
            case "boolean":
              return (
                <Checkbox
                  key={index}
                  label={field.name}
                  onChange={(value) => {}}
                />
              );
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
              return <div key={index}>Sanjay</div>;
          }
        })}
      </div>
    </>
  );
};

export default DynamicFiltersList;