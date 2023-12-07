import { memo, useMemo, useState } from "react";
import { SearchIcon } from "~/icons/search-icon";
import { myDebounce } from "~/common/utility";
import ClearButton from "../Atoms/search-button";

export type SearchBarProps = {
  onSearch: (value: string) => void;
  placeHolder?: string;
  debounchTime?: number;
  showSearchButton?: boolean;
};

const Searchbar: React.FC<SearchBarProps> = ({
  placeHolder = "Search",
  onSearch,
  debounchTime = 300,
  showSearchButton = true,
}) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    onSearch(searchTerm);
  };

  const debouncedOnChange = useMemo(
    () => myDebounce(onSearch, debounchTime),
    [debounchTime, onSearch]
  );

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full lg:w-1/4">
      <form onSubmit={onSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            autoComplete="off"
            type="search"
            id="default-search"
            value={searchTerm}
            onChange={(e) => {
              const value = e.target.value;
              setSearchTerm(value);
              debouncedOnChange(value);
            }}
            className="block w-full p-3 pl-10 text-sm 
          text-gray-900 border border-gray-300 rounded-full 
          bg-gray-50 dark:bg-gray-700
           focus:ring-blue-500 focus:border-blue-500 
          dark:bg-gray-703 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeHolder}
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

export default memo(Searchbar);
