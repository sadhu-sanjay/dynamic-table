import React, { useEffect, useRef, useState } from "react";
import { IconChevronDown } from "~/icons/chevron-down-icon";
import { SearchIcon } from "~/icons/search-icon";
import { IconSpinner } from "~/icons/spinner-icon";
import { FieldOption } from "~/models/field";

function DropdownMultiSelect({
  options,
  label,
  onSelected,
  isLoading,
}: {
  options: Array<FieldOption>;
  label: string;
  onSelected: (selectedItems: FieldOption[]) => void;
  isLoading: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const clearAllSelected = () => setSelectedItems([]);

  const [selectedItems, setSelectedItems] = useState<FieldOption[]>([]);

  const filteredItems =
    options.length > 0
      ? options.filter((item) => {
          if (!item) return;
          return item.label
            ?.toLowerCase()
            .replace(/\s+/g, "")
            .includes(searchTerm.toLowerCase().replace(/\s+/g, ""));
        })
      : [];

  const handleSelected = (item: FieldOption) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i.value !== item.value));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  function doneButtonClicked() {
    onSelected(selectedItems);
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <button
          disabled={isLoading}
          onClick={toggleDropdown}
          type="button"
          className=" rounded-4px py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-4pixel border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
        >
          {selectedItems.length > 0 && (
            <span className="mr-2 inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
              {selectedItems.length}
            </span>
          )}
          {isLoading ? `Loading...` : label}
          {IconChevronDown(isLoading)}
          {IconSpinner(isLoading)}
        </button>

        {isOpen && (
          <div
            className="bg-pink absolute z-10 bg-white rounded-4px shadow w-60 dark:bg-gray-700"
            id="dropdownSearch"
          >
            <div className="p-3">
              <label htmlFor="input-group-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  id="input-group-search"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                  placeholder={`Search ${label}`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <ul
              className="h-[20rem] px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownSearchButton"
            >
              {filteredItems.map((item) => (
                <li key={item.value}>
                  <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id={`checkbox-item-${item.value}`}
                      type="checkbox"
                      checked={selectedItems.includes(item)}
                      onChange={() => handleSelected(item)}
                      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor={`checkbox-item-${item.value}`}
                      className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      {item.label}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <div className="flex items-center justify-between">
                <p className="flex items-center p-3 text-sm font-medium text-slate-600  dark:text-slate-200 ">
                  {/* show how many selected */}
                  {selectedItems.length === 0
                    ? `Total: ${options.length}`
                    : `${selectedItems.length} of ${options.length}`}
                </p>
                <p
                  onClick={clearAllSelected}
                  className="flex items-center text-sm font-medium text-red-600 border-trounded-b-lg cursor-pointer dark:text-red-500 hover:underline"
                >
                  clear all
                </p>
                <button
                  onClick={() => doneButtonClicked()}
                  className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 m-2 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default React.memo(DropdownMultiSelect);
