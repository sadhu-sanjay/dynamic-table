import React from "react";
import OrderIcon from "~/icons/order-icon";
import Searchbar from "~/components/Molecules/searchbar";
import NotificationIcon from "~/icons/notification-icon";
import NotificationButton from "../Atoms/notification-button";
import Link from "next/link";

interface HeaderProps {
  title: string;
  onSubmit: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ title, onSubmit }) => {
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
        <Searchbar className="ml-auto hidden md:block" onSubmit={onSubmit} />
        <NotificationButton className="hidden md:block" />
        <Link href="/login">
        <button
          className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
       >
          <img
            src="/vi.jpeg"
            width="32"
            height="32"
            className="rounded-full"
            alt="Avatar"
            style={{ aspectRatio: "32 / 32", objectFit: "cover" }}
          />
          <span className="sr-only">Toggle user menu</span>
        </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
