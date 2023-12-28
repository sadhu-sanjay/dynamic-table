import Image from "next/image";
import Link from "next/link";
import { memo, useState } from "react";
import { RECORDS_FETCH_URL } from "~/common/config";
import Searchbar from "~/components/Molecules/searchbar";
import TableHeader from "~/components/Organisms/table-header";
import { Table } from "~/components/sections/table";
import { navData } from "~/data/nav-data";
import AnalyticsIcon from "~/icons/analytics-icon";
import BoxIcon from "~/icons/box-icon";
import CartIcon from "~/icons/cart-icon";
import DocTextIcon from "~/icons/doctext-icon";
import FeedbackIcon from "~/icons/feedback-icon";
import IconHome from "~/icons/icon-home";
import IconSettings from "~/icons/icon-settings";
import IconUsers from "~/icons/icon-users";
import LoadingCircle from "~/icons/loading-circle";
import LogoBox from "~/icons/logo-box";
import MeterIcon from "~/icons/meter-icon";
import OrderIcon from "~/icons/order-icon";
import { NavItem } from "~/models/types";
import { FilterProvider } from "~/providers/filter-provider";

type NavBarProps = {
  title?: string;
  items?: string[];
  children?: React.ReactNode;
};

const NavBar: React.FC<NavBarProps> = ({ title, items, children }) => {
  const [selected, setSelected] = useState<string>("6");

  return (
    <div className="col-span-2 hidden border-r  bg-gray-100/40 lg:block dark:bg-gray-800/40">
      {/* Side Conatiner */}
      <div className="flex flex-col gap-2">
        {/* Logo */}
        <div className="flex h-[60px] items-center px-6">
          <a className="flex items-center gap-2 font-semibold" href="#">
            <Image alt="logo" src="/logo.png" width={24} height={24} />
            <span className="">Shicane Inc</span>
          </a>
        </div>

        <div className="flex-1">
          <nav className="grid items-start px-4 text-sm font-medium">
            {/* Nav Items */}
            {navData.map((item) => {
              return (
                <Link
                  key={item.id}
                  className={` flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${
                    selected === item.id
                      ? " bg-gray-100 dark:bg-gray-800 dark:text-gray-50 text-gray-900 scale-105"
                      : ""
                  }`}
                  href={`/dashboard/${item.path}`}
                  onClick={() => {
                    setSelected(item.id);
                  }}
                >
                  {item.icon}
                  {item.label}
                  {item.badge && (
                    <div className="bg-gray-900 dark:bg-gray-50 dark:text-gray-900
                     text-gray-100 border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full ">
                      {item.badge}
                    </div>
                  )}
                </Link>
              );
            })}
            {/* <a
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <IconHome />
              Home
            </a>
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <BoxIcon />
              Products
            </a>
            <a
              className="flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-500  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="/dashboard/orders"
            >
              <CartIcon />
              Orders
              <div className="border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                700
              </div>
            </a>
            <a
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="/dashboard/proposals"
            >
              <DocTextIcon />
              Proposals
              <div className="border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                21
              </div>
            </a>
            <a>
              <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <IconUsers />
                Customers
              </div>
            </a>
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <AnalyticsIcon />
              Analytics
            </a> */}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
