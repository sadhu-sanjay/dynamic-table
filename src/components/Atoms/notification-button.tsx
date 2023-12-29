import BellIcon from "~/icons/notification-icon";

export default function NotificationButton({
  className,
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      className="relative inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 dark:bg-gray-700 rounded-4px hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <BellIcon />
      <span className="sr-only">Notifications</span>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
        20
      </div>
    </button>
  );
}
