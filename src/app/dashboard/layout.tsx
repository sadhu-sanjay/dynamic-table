"use client";
import Image from "next/image";
import { useState } from "react";
import Searchbar from "~/components/Molecules/searchbar";
import TableHeader from "~/components/Organisms/table-header";
import { Table } from "~/components/sections/table";
import AnalyticsIcon from "~/icons/analytics-icon";
import BoxIcon from "~/icons/box-icon";
import CartIcon from "~/icons/cart-icon";
import FeedbackIcon from "~/icons/feedback-icon";
import IconHome from "~/icons/icon-home";
import IconSettings from "~/icons/icon-settings";
import IconUsers from "~/icons/icon-users";
import LoadingCircle from "~/icons/loading-circle";
import LogoBox from "~/icons/logo-box";
import MeterIcon from "~/icons/meter-icon";
import OrderIcon from "~/icons/order-icon";
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
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <BoxIcon />
                  Products
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
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <a className="lg:hidden" href="#">
              <OrderIcon />
              <span className="sr-only">Home</span>
            </a>
            <div className="flex-1">
              <h1 className="font-semibold text-lg">Recent Orders</h1>
            </div>
            <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
              <Searchbar
                className="ml-auto hidden md:block"
                onSubmit={(value) => console.log(value)}
              />
              <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
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
            </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6"></main>
        </div>
      </div>
    </FilterProvider>
  );
}
