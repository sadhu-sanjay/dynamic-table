import Searchbar from "~/components/Molecules/searchbar";
import PlusIcon from "~/icons/plus-icon";
import ArrowDown from "~/icons/arrow-down";
import { useFilters } from "~/providers/filter-provider";
import DropdownMultiSelect from "../Molecules/dropdown-multiSelect";
import DynamicFilters from "./dynamic-filter";
import { Field, FieldOption } from "~/models/field";
import filterFields from "~/data/FilterData";
import TableHeader2 from "./table-header-2";
const fields: Field[] = filterFields as Field[];
fields.sort((a, b) => a.order - b.order);

type TableHeaderProps = {
  className?: string;
};

const TableHeader: React.FC<TableHeaderProps> = ({ className }) => {
  return (
    <div className={`${className} w-full bg-white shadow-md dark:bg-gray-800`}>
      <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0 md:space-x-4"></div>
      {/* <DynamicFilters filterFields={fields} /> */}
      <TableHeader2 />
    </div>
  );
};

export default TableHeader;
