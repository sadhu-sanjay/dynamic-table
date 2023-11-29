import Searchbar from "~/components/Molecules/searchbar";
import { Dropdown } from "../Molecules/dropdown";
import PlusIcon from "~/icons/plus-icon";
import ArrowDown from "~/icons/arrow-down";

type TableHeaderProps = {
  className?: string;
  onSearch: (term: string) => void;
};

export const TableHeader: React.FC<TableHeaderProps> = ({
  className,
  onSearch,
}) => {
  return (
    <div
      className={`${className} w-full bg-white shadow-md dark:bg-gray-800`}
    >
      <div className="flex flex-col items-center justify-between p-3 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
        <Searchbar onChange={onSearch} />
        {/* <Dropdown
          label="Filter"
          placeholder="Filter by"
          onItemSelected={onFilter}
        /> */}
        <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
          <button
            type="button"
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            <PlusIcon />
            Add product
          </button>
          <div className="flex items-center w-full space-x-3 md:w-auto">
            <button
              id="actionsDropdownButton"
              data-dropdown-toggle="actionsDropdown"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              type="button"
            >
              <ArrowDown />
              Actions
            </button>
            <div
              id="actionsDropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="actionsDropdownButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Mass Edit
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Delete all
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
