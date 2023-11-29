"use client";
import { useState } from "react";
import { TableHeader } from "~/components/Organisms/table-header";
import { SortConfig } from "~/models/types";
import { motion } from "framer-motion";
import SortIcon from "~/icons/sort-icon";

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
      className="relative shadow-md sm:rounded-lg 
      h-5/6 w-5/6 bg-white dark:bg-gray-800
      flex flex-col "
    >
      <TableHeader onSearch={handleSearch} onFilter={handleFilter} />
      <div className="w-full h-full overflow-auto bg-pink-700">
        <table className="w-full overflow-auto bg-blue-700 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {data &&
                Object.keys(data[0]).map((key, index) => (
                  <th key={index} scope="col" className="px-6 py-3 ">
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => handleSort(key)}
                    >
                      {key}
                      <SortIcon
                        className={`w-4 h-4 ml-1 ${
                          sortConfig.key === key
                            ? "text-gray-700 dark:text-gray-300"
                            : "text-gray-400 dark:text-gray-600"
                        }`}
                      />
                    </div>
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {filteredData &&
              filteredData.map((row, index) => (
                <tr
                  key={index}
                  className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900"
                >
                  {Object.keys(data[0]).map((key, index) => (
                    <td
                      key={index}
                      className="px-6 py-3 max-w-xs overflow-hidden"
                    >
                      {(row as any)[key]}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
