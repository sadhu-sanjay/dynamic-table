// get all categories
// const categories = Array.from(new Set(products.map((p) => p.category)));
// const prices = Array.from(new Set(products.map((p) => p.price)));

// const filterUI = [categories, prices];

// const CategoryFilter = () => {
//   const { filters, setFilters } = useFilters();

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     category: string
//   ) => {
//     if (e.target.checked) {
//       // add filter condition if checked
//       setFilters([...filters, ["category", Operators.equal, category]]);
//     } else {
//       // remove filter condition if unchecked
//       const newValue = filters.filter((condition) => condition[2] !== category);
//       setFilters(newValue);
//     }
//   };
//   return (
//     <>
//       {filterUI.map((filter, i) => (
//         <div key={i}>
//           {filter.map((category, i) => {
//             const checked = filters.some((condition) => {
//               const [field, operator, value] = condition;
//               return value === category;
//             });
//             return (
//               <div key={i}>
//                 <input
//                   type="checkbox"
//                   id={`input-${category}`}
//                   onChange={(e) => handleChange(e, category)}
//                   checked={checked}
//                 />
//                 <label htmlFor={`input-${category}`}>{category}</label>
//               </div>
//             );
//           })}
//         </div>
//       ))}
//       <div>
//         {categories.map((category, i) => {
//           const checked = filters.some((condition) => {
//             const [field, operator, value] = condition;
//             return value === category && field === "category";
//           });
//           return (
//             <div key={i}>
//               <input
//                 type="checkbox"
//                 id={`input-${category}`}
//                 onChange={(e) => handleChange(e, category)}
//                 checked={checked}
//               />
//               <label htmlFor={`input-${category}`}> {category}</label>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export { CategoryFilter };
