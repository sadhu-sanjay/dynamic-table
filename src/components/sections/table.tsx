"use client";
import { DropdownOption, SortConfig } from "~/models/types";
import Searchbar from "~/components/Molecules/searchbar";
import { useEffect, useState } from "react";
import { visibleColumns } from "~/common/config";
import IconSort from "~/icons/sort-icon";
import { motion } from "framer-motion";
import { TableHeader } from "../Organisms/table-header";

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

  const handleFilter = (value: any) => {
    // const filtered = data.filter((row: any) => {
    //   return row[column].toLowerCase().includes(value.toLowerCase());
    // });
    // setFilteredData(filtered);
  };

  return (
    <div
      className="relative overflow-x-auto shadow-md sm:rounded-lg 
    max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
    >
      <TableHeader onSearch={handleSearch} onFilter={handleFilter} />
      {/* <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {data &&
              Object.keys(data[0]).map((key, index) => (
                <th key={index} scope="col" className="px-6 py-3 ">
                  <motion.div
                    className="flex items-center cursor-pointer"
                    onClick={() => handleSort(key)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 1.0 }}
                  >
                    {key}
                    <IconSort
                      className={`w-4 h-4 ml-1 ${
                        sortConfig.key === key
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
                {Object.keys(data[0]).map((key, index) => (
                  <td
                    key={index}
                    className="px-6 py-3 max-w-xs overflow-hidden"
                  >
                    {" "}
                    {(row as any)[key]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table> */}
    </div>
  );
};
