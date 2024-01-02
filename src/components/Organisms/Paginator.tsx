import { IconSpinnerSmall } from "~/icons/spinner-small-icon";

export function Paginator({
  className,
  isLoading,
  filtered,
  total,
}: {
  className?: string;
  isLoading: boolean;
  filtered: number;
  total: number;
}) {
  return (
    <>
      <div
        className={` flex flex-col items-center p-2 
          bg-gray-100 dark:bg-gray-800 border-t dark:border-gray-700 
          ${className}`}
      >
        <span className="text-sm text-gray-700 dark:text-gray-400">
          <span className="mr-2">
            {isLoading ? <IconSpinnerSmall /> : <></>}
          </span>
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {filtered}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {total}
          </span>{" "}
          Entries
        </span>
      </div>
    </>
  );
}
