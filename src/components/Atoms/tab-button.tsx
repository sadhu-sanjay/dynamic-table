import { FunctionComponent } from "react";

const TabButton = ({
  title = "Delete",
  className,
  onClick,
  showIcon = true,
  Icon,
  isDisabled = false,
  isActive = true,
}: {
  title: string;
  onClick: () => void;
  className?: string;
  Icon?: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  showIcon?: boolean;
  isDisabled?: boolean;
  isActive?: boolean;
}) => {
  return (
    <>
      <button
        className={`inline-flex items-center justify-center text-xs font-semibold 
          disabled:opacity-50 hover:bg-secondary/80  bg-gray-200 text-black 
          rounded-full px-3 py-2
          ${
            isActive
              ? "dark:text-gray-900 shadow-md outline-none bg-white "
              : "dark:text-gray-400 bg-white dark:bg-gray-800"
          }
           dark:hover:bg-secondary/80 dark:text-gray-200`}
        disabled={isDisabled}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};

export default TabButton;
