import { Field } from "~/models/field";
import filterFields from "~/data/FilterData";
import DynamicFilterList from "./dynamic-filter-list";
const fields: Field[] = filterFields as Field[];
fields.sort((a, b) => a.order - b.order);

type TableHeaderProps = {
  className?: string;
};

const TableHeader: React.FC<TableHeaderProps> = ({ className }) => {
  return (
    <div className={`${className} sticky z-40 top-0 w-full bg-white shadow-sm dark:bg-gray-800`}>
      <DynamicFilterList filterFields={fields} />
    </div>
  );
};

export default TableHeader;
