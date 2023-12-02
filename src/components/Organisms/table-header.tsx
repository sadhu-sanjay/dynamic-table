import Searchbar from "~/components/Molecules/searchbar";
import PlusIcon from "~/icons/plus-icon";
import ArrowDown from "~/icons/arrow-down";
import { CategoryFilter, CategoryFilter2 } from "./category-filter";
import { useFilters } from "~/providers/filter-provider";
import DropdownMultiSelect from "../Molecules/dropdown-multiSelect";
import { DropdownOption } from "~/models/types";

type TableHeaderProps = {
  className?: string;
  onSearch: (term: string) => void;
  filterProps?: Array<DropdownOption>;
};

export const TableHeader: React.FC<TableHeaderProps> = ({
  className,
  onSearch,
  filterProps = [{ label: "Sanjay", value: "Goswami" }],
}) => {
  const { filters } = useFilters();

  return (
    <div className={`${className} w-full bg-white shadow-md dark:bg-gray-800`}>
      <div className="flex flex-col items-center justify-between p-3 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
        <Searchbar onChange={onSearch} />
        <DropdownMultiSelect
          data={filterProps}
          label="Filters"
          onSelected={() => console.log("On Selected")}
        />
        {/* <CategoryFilter /> */}
      </div>
    </div>
  );
};
