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
        className={`inline-flex items-center justify-center rounded-md text-xs font-semibold 
      ring-offset-background transition-colors  disabled:pointer-events-none 
      disabled:opacity-50 hover:bg-secondary/80 h-10 bg-gray-200 text-black 
      rounded-l-lg px-3 py-1.5 
      ${isActive ? "text-gray-900 bg-white shadow-md outline-none" : ""}`}
        disabled={isDisabled}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};
export default TabButton;

{
  /* <div className="bg-white p-1 rounded-lg shadow flex">
  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 text-gray-500 rounded-r-lg px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-300">
    Unread
  </button>
</div>; */
}
