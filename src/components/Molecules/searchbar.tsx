import { useMemo, useState } from "react";
import { SearchIcon } from "~/icons/search-icon";
import ClearButton from "../Atoms/search-button";

export type SearchBarProps = {
  className?: string;
  onSubmit: (value: string) => void;
  placeHolder?: string;
  debounchTime?: number;
  showSearchButton?: boolean;
};

const Searchbar: React.FC<SearchBarProps> = ({
  className,
  onSubmit,
  placeHolder = "Search",
  debounchTime = 300,
  showSearchButton = false,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedOnChange = useMemo(
    () => myDebounce(onSubmit, debounchTime),
    [debounchTime, onSubmit]
  );

  const onEnter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <div className={`${className}`}>
      <form className="flex items-center" onSubmit={onEnter}>
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            id="simple-search"
            className="rounded-full block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder={placeHolder}
            value={searchTerm}
            onChange={(e) => {
              const value = e.target.value;
              setSearchTerm(value);
              debouncedOnChange(value);
            }}
          />
          {showSearchButton && (
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-center
          text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
          hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
          dark:focus:ring-blue-800 shadow-sm shadow-blue-500/50 dark:shadow-sm 
          dark:shadow-blue-800/80 font-medium text-xs "
            >
              Search
            </button>
          )}
          {searchTerm && <ClearButton onClear={() => setSearchTerm("")} />}
        </div>
      </form>
    </div>
  );
};

export const myDebounce = (func: any, wait: number) => {
  let timeout: any;
  return function executedFunction(...args: any) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export default Searchbar;
