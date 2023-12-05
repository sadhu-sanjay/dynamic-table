import { Field } from "~/models/types";
import { Operators, useFilters } from "~/providers/filter-provider";
import config from "~/filters-config.json";
import { useState } from "react";
const fields: Field[] = config as Field[];

const DynamicFilters = (props: { fields: Field[] }) => {
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
              return <div>implent</div>;
            case "date":
              return <div>implent</div>;
            case "text":
              return (
                <input
                  name={field.name}
                  value={formValues[field.name] || ""}
                  onChange={() => console.log("change")}
                  disabled={field.isDisabled}
                  required={field.isRequired}
                  key={index}
                  type={field.type}
                />
              );
            case "dropdown":
              return <div key={field.name}>Sanjay</div>;
            default:
              return <div key={field.name}>Sanjay</div>;
          }
        })}
      </form>
    </>
  );
};

export default DynamicFilters;
