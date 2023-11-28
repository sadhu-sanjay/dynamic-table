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
      h-[90dvh] w-[100vw] "
    >
      <TableHeader onSearch={handleSearch} onFilter={handleFilter} />
      <div className=" bg-fuchsia-900 w-full h-full overflow-auto ">
        <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            tenetur atque nesciunt modi nostrum doloribus consequatur quia
            dolor! Quidem, ratione hic. Similique totam accusamus amet est
            asperiores sint velit in.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tempore tenetur atque nesciunt modi nostrum
            doloribus consequatur quia dolor! Quidem, ratione hic. Similique
            totam accusamus amet est asperiores sint velit in.
          </div>
          <thead className="sticky top-0 z-10 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                      <SortIcon
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
