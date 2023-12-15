"use client";
import Image from "next/image";
import { useState } from "react";
import TableHeader from "~/components/Organisms/table-header";
import { Table } from "~/components/sections/table";
import AnalyticsIcon from "~/icons/analytics-icon";
import CartIcon from "~/icons/cart-icon";
import FeedbackIcon from "~/icons/feedback-icon";
import IconHome from "~/icons/icon-home";
import IconSettings from "~/icons/icon-settings";
import IconUsers from "~/icons/icon-users";
import LoadingCircle from "~/icons/loading-circle";
import LogoBox from "~/icons/logo-box";
import MeterIcon from "~/icons/meter-icon";
import { FilterProvider } from "~/providers/filter-provider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FilterProvider>
      <div className="p-8 box-border grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
        {/* Nav */}
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          {/* Side Conatiner */}
          <div className="flex flex-col gap-2">
            {/* Logo */}
            <div className="flex h-[60px] items-center px-6">
              <a className="flex items-center gap-2 font-semibold" href="#">
                {/* <LogoBox /> */}
                <Image alt="logo" src="/logo.png" width={24} height={24} />
                <span className="">Acme Inc</span>
              </a>
            </div>
            {/* Nav Items */}
            <div className="flex-1">
              <nav className="grid items-start px-4 text-sm font-medium">
                <a
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <IconHome />
                  Home
                </a>
                <a
                  className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                  href="#"
                >
                  <CartIcon />
                  Orders
                  <div className="border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    12
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
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </FilterProvider>
  );
}
