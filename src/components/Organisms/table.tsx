"use client";
import { DropdownOption, SortConfig } from "~/models/types";
import Searchbar from "~/components/Molecules/searchbar";
import { useEffect, useState } from "react";
import { visibleColumns } from "~/common/config";
import IconSort from "~/icons/sort-icon";
import { motion } from "framer-motion";

type TableProps = {
  data: Array<Object>;
  search: boolean;
  pagination: boolean;
};

export const Table: React.FC<TableProps> = ({ data }) => {
  const [filteredData, setFilteredData] = useState<Array<Object>>(data);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "",
    direction: "",
  });

  const handleSearch = (term: string) => {
    const filtered = data.filter((row: any) => {
      return row.name.toLowerCase().includes(term.toLowerCase());
    });
    setFilteredData(filtered);
  };

  const handleSort = (key: string) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredData].sort((a: any, b: any) => {
      if (direction === "asc") {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });

    setFilteredData(sortedData);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="p-4 bg-white dark:bg-gray-900">
        <Searchbar onChange={handleSearch} />
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {visibleColumns.map((column) => (
              <th key={column.value} scope="col" className="px-6 py-3 ">
                <motion.div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSort(column.value)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 1.0 }}
                >
                  {column.label}
                  <IconSort
                    className={`w-4 h-4 ml-1 ${
                      sortConfig.key === column.value
                        ? "text-gray-700 dark:text-gray-300"
                        : "text-gray-400 dark:text-gray-600"
                    }`}
                  />
                </motion.div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row, index) => (
              <tr
                key={index}
                className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                {visibleColumns.map((column) => (
                  <td
                    key={column.value}
                    className="px-6 py-3 max-w-xs overflow-hidden"
                  >
                    {(row as any)[column.value]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
