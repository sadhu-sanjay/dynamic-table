import { useState } from "react";

const Checkbox: React.FC<{
  label: string;
  onChange: (checked: boolean) => void;
}> = ({ label, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <div className=" border border-gray-200 rounded-lg dark:border-gray-600">
      <div className="flex items-center px-3">
        <input
          id={label}
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          onChange={handleCheckboxChange}
          checked={checked}
        />
        <label
          htmlFor={label}
          className="w-full ps-1.5 py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label || "Checkbox"}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
