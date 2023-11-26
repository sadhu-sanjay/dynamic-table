// import React, { useState, useMemo } from "react";
// import { DropdownOption } from "~/types";
// import Searchbar from "~/components/Molecules/searchbar";

// type TableProps = {
//   data: Array<Object>;
//   visibleColumns: Array<DropdownOption>;
//   search: boolean;
//   pagination: boolean;
// };

// export const Table: React.FC<TableProps> = ({
//   data,
//   visibleColumns,
//   search,
//   pagination,
// }) => {
//   const [filteredData, setFilteredData] = useState<Array<Object>>(data);
//   const [sortConfig, setSortConfig] = useState<{
//     key: string;
//     direction: string;
//   }>({
//     key: "",
//     direction: "",
//   });

//   const handleSearch = (searchTerm: string) => {
//     // Implement your search logic here
//     const filtered = data.filter((row) => {
//       // Your search logic here
//       return true;
//     });
//     setFilteredData(filtered);
//   };

//   const handleSort = (key: string) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });

//     // Implement your sorting logic here
//     const sortedData = [...filteredData].sort((a, b) => {
//       if (direction === "asc") {
//         return a[key] > b[key] ? 1 : -1;
//       } else {
//         return a[key] < b[key] ? 1 : -1;
//       }
//     });

//     setFilteredData(sortedData);
//   };

//   const sortedAndFilteredData = useMemo(() => {
//     // Implement your filter logic here
//     return filteredData;
//   }, [filteredData]);

//   return (
//     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//       <div className="p-4 bg-white dark:bg-gray-900">
//         {search && (
//           <Searchbar
//             onValueChange={handleSearch}
//             setSearchTerm={() => console.log("SetSearchTerm")}
//             searchTerm={""}
//           />
//         )}
//       </div>
//       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             {visibleColumns.map((column) => (
//               <th
//                 key={column.value}
//                 scope="col"
//                 className="px-6 py-3 cursor-pointer"
//                 onClick={() => handleSort(column.value)}
//               >
//                 {column.label}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {sortedAndFilteredData.map((row, index) => (
//             <tr
//               key={index}
//               className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               {visibleColumns.map((column) => (
//                 <td key={column.value} className="px-6 py-3">
//                   {(row as any)[column.value]}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
