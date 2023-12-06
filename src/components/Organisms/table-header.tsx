import Searchbar from "~/components/Molecules/searchbar";
import PlusIcon from "~/icons/plus-icon";
import ArrowDown from "~/icons/arrow-down";
import { useFilters } from "~/providers/filter-provider";
import DropdownMultiSelect from "../Molecules/dropdown-multiSelect";
import DynamicFilters from "./dynamic-filter";
import { Field, FieldOption } from "~/models/field";
import filterFields from "~/filters-config.json";
const fields: Field[] = filterFields as Field[];
fields.sort((a, b) => a.order - b.order);

type TableHeaderProps = {
  className?: string;
  onSearch?: (term: string) => void;
  filterProps?: Array<FieldOption>;
};

const TableHeader: React.FC<TableHeaderProps> = ({
  className,
  onSearch,
  filterProps = [{ label: "Sanjay", value: "Goswami" }],
}) => {
  return (
    <div className={`${className} w-full bg-white shadow-md dark:bg-gray-800`}>
      <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0 md:space-x-4"></div>
      <DynamicFilters filterFields={fields} />
    </div>
  );
};

export default TableHeader;
