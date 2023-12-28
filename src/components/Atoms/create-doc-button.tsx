import DeleteIcon from "~/icons/delete-icon";
import DocAddIcon from "~/icons/doc-add-icon";

const CreateDocButton = ({
  title = "Delete",
  className,
  onClick,
  showIcon = true,
}: {
  title: string;
  onClick: () => void;
  className?: string;
  showIcon?: boolean;
}) => (
  <>
    <button
      onClick={onClick}
      type="submit"
      className={`rounded-4px px-4 py-2  text-center 
          text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
          hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
          dark:focus:ring-blue-800 shadow-sm shadow-blue-500/50 dark:shadow-sm 
          dark:shadow-blue-800/80 font-medium text-sm ${className}`}
    >
      {showIcon && (
        <DocAddIcon width={20} height={20} className="mr-2 inline" />
      )}
      {title}
    </button>
  </>
);

export default CreateDocButton;
