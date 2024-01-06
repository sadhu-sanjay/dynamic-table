import React from "react";
import OrderIcon from "~/icons/order-icon";
import NotificationButton from "../Atoms/notification-button";
import { useSession } from "next-auth/react";
import UserDropdown from "./user-dropdown";

interface HeaderProps {
  title: string;
  onSubmit: (value: string) => void;
  onAvatarClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onSubmit, onAvatarClick }) => {
  const { data: session } = useSession();

  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <a className="lg:hidden" href="#">
        <OrderIcon />
        <span className="sr-only">Home</span>
      </a>
      <div className="flex-1">
        <h1 className="font-semibold text-lg">{title}</h1>
      </div>
      <div className="flex flex-1 items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        {/* <Searchbar className="ml-auto hidden md:block" onSubmit={onSubmit} /> */}
        <NotificationButton className="hidden md:block" />
        <div>
          {session ? (
            <UserDropdown session={session} />
          ) : (
            <button
              className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
              onClick={onAvatarClick}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
