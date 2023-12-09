import { Field, FieldOption } from "~/models/field";
import filterFields from "~/data/FilterData";
import DynamicFilterList from "./dynamic-filter-list";
const fields: Field[] = filterFields as Field[];
fields.sort((a, b) => a.order - b.order);

type TableHeaderProps = {
  className?: string;
};

const TableHeader: React.FC<TableHeaderProps> = ({ className }) => {
  return (
    <div className={`${className} w-full bg-white shadow-md dark:bg-gray-800`}>
      <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0 md:space-x-4"></div>
      <DynamicFilterList filterFields={fields} />
    </div>
  );
};

export default TableHeader;
