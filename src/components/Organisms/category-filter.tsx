import { Field } from "~/models/field";
import { Operators, useFilters } from "~/providers/filter-provider";
import config from "~/filters-config.json";
const fields: Field[] = config as Field[];

const GenericField = (props: { field: any }) => {
  const field = props.field;

  if (field.type === "number") {
    return (
      <div>
        <input type="number" />
      </div>
    );
  }

  if (field.type === "text") {
    return (
      <div>
        <input placeholder={`${field.label}`} type="text"></input>
      </div>
    );
  }

  if (field.type === "date") {
    return (
      <div>
        <input type="date" />
      </div>
    );
  }

  if (field.type === "boolean") {
    return (
      <div>
        <input type="checkbox" />
      </div>
    );
  }

  if (field.type === "enum") {
    return (
      <div>
        <select>
          {field.options.map((option: any, i: number) => (
            <option key={i}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
};

export const DynamicFiltersList = () => {
  return (
    <>
      {fields.map((each: any, i) => (
        <div key={i}>
          <h3>{each.label}</h3>
          <div key={i}>
            <GenericField field={each} />
          </div>
        </div>
      ))}
    </>
  );
};
