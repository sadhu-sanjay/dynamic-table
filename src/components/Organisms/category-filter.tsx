// components/CategoryFilter.tsx
import products from "~/../data.json";
import ArrowDown from "~/icons/arrow-down";
import { Operators, useFilters } from "~/providers/filter-provider";

// get all categories
const categories = Array.from(new Set(products.map((p) => p.category)));
const prices = Array.from(new Set(products.map((p) => p.price)));

const filterUI = [categories, prices];

const CategoryFilter = () => {
  const { filters, setFilters } = useFilters();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    category: string
  ) => {
    if (e.target.checked) {
      // add filter condition if checked
      setFilters([...filters, ["category", Operators.equal, category]]);
    } else {
      // remove filter condition if unchecked
      const newValue = filters.filter((condition) => condition[2] !== category);
      setFilters(newValue);
    }
  };
  return (
    <>
      {filterUI.map((filter, i) => (
        <div key={i}>
          {filter.map((category, i) => {
            const checked = filters.some((condition) => {
              const [field, operator, value] = condition;
              return value === category;
            });
            return (
              <div key={i}>
                <input
                  type="checkbox"
                  id={`input-${category}`}
                  onChange={(e) => handleChange(e, category)}
                  checked={checked}
                />
                <label htmlFor={`input-${category}`}> {category}</label>
              </div>
            );
          })}
        </div>
      ))}
      <div>
        {categories.map((category, i) => {
          const checked = filters.some((condition) => {
            const [field, operator, value] = condition;
            return value === category && field === "category";
          });
          return (
            <div key={i}>
              <input
                type="checkbox"
                id={`input-${category}`}
                onChange={(e) => handleChange(e, category)}
                checked={checked}
              />
              <label htmlFor={`input-${category}`}> {category}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};

const CategoryFilter2: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button"
      >
        Filter by category
        <ArrowDown className="ml-2" />
      </button>

      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdown"
        className="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
      >
        <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
          Category
        </h6>
        <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
          <li className="flex items-center">
            <input
              id="apple"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label
              htmlFor="apple"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Apple (56)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="fitbit"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label
              htmlFor="fitbit"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Fitbit (56)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="dell"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label
              htmlFor="dell"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Dell (56)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="asus"
              type="checkbox"
              value=""
              checked
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label
              htmlFor="asus"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Asus (97)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="logitech"
              type="checkbox"
              value=""
              checked
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label
              htmlFor="logitech"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Logitech (97)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="msi"
              type="checkbox"
              value=""
              checked
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label
              htmlFor="msi"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              MSI (97)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="bosch"
              type="checkbox"
              value=""
              checked
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label
              htmlFor="bosch"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Bosch (176)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="sony"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label
              htmlFor="sony"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Sony (234)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="samsung"
              type="checkbox"
              value=""
              checked
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label
              htmlFor="samsung"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Samsung (76)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="canon"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label
              htmlFor="canon"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Canon (49)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="microsoft"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label
              htmlFor="microsoft"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Microsoft (45)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="razor"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label
              htmlFor="razor"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Razor (49)
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { CategoryFilter, CategoryFilter2 };
