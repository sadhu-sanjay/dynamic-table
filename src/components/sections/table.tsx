"use client";
import { useEffect, useState } from "react";
import TableHeader from "~/components/Organisms/table-header";
import { SortConfig } from "~/models/types";
import SortIcon from "~/icons/sort-icon";
import EmptyList from "../Organisms/empty-list";
import { NO_RECORDS_TRY_AGAIN } from "~/common/config";
import { Spinner } from "../Atoms/spinner";
import { Operators, useFilters } from "~/providers/filter-provider";
import { FieldOption } from "~/models/field";
import { Paginator } from "../Organisms/Paginator";

type TableProps = {
  data: Array<Object>;
  search?: boolean;
  pagination?: boolean;
  error: Error | null;
  isFetching: Boolean;
};

export const Table: React.FC<TableProps> = ({
  data,
  error = null,
  isFetching = false,
  pagination = true,
  search = true,
}) => {
  const [filteredData, setFilteredData] = useState<Array<Object>>(data);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "",
    direction: "",
  });
  const { selectedFilters } = useFilters();

  useEffect(() => {
    const newData =
      data &&
      data.filter((row: any) => {
        return selectedFilters.every(([key, operator, value]) => {
          if (operator === Operators.contains) {
            return row[key].toLowerCase().replace(/\s/g, "").includes(value);
          } else if (operator === Operators.in) {
            return (value as Array<string>).includes(row[key]);
          }
        });
      });
    setFilteredData(newData);
  }, [data, selectedFilters]);

  const handleSort = (key: string) => {};

  return (
    <div
      className="relative shadow-md sm:rounded-lg 
      w-full h-full overflow-auto
      bg-blue-100
      dark:bg-gray-800
      flex flex-col"
    >
      {isFetching && <Spinner message="Please wait ..." />}
      {error && (
        <EmptyList title="Error loading data" subtitle={error.message} />
      )}
      {!error && !isFetching && data?.length < 1 && (
        <EmptyList title="No records found" subtitle={NO_RECORDS_TRY_AGAIN} />
      )}

      {!error && !isFetching && data && data.length > 0 && (
        <>
          <div className="w-[400px] h-[400px] ">
            <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className=" sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3 max-w-xs overflow-hidden">No.</th>
                  {data &&
                    Object.keys(data[0]).map((key, index) => (
                      <th
                        key={index}
                        scope="col"
                        className=" px-6 py-3 
                    hover:scale-105 transform transition-transform duration-300
                    "
                      >
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
                  filteredData.length > 0 &&
                  filteredData.map((row, index) => (
                    // add a column for showing row number
                    <tr
                      key={index}
                      className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900"
                    >
                      <td key={index} className="px-6 py-3 ">
                        {index + 1}
                      </td>
                      {Object.keys(data[0]).map((key, index) => (
                        <td key={index} className="px-6 py-3 ">
                          {(row as any)[key]}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
              <Paginator
                isLoading={isFetching}
                filtered={filteredData?.length}
                total={data?.length}
              />
            </table>

            {filteredData && filteredData.length < 1 && (
              <EmptyList
                title="No records found"
                subtitle={NO_RECORDS_TRY_AGAIN}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
