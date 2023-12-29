"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { RECORDS_FETCH_URL } from "~/common/config";
import Searchbar from "~/components/Molecules/searchbar";
import Header from "~/components/Organisms/header";
import NavBar from "~/components/Organisms/nav-bar";
import OrderIcon from "~/icons/order-icon";
import { FilterProvider } from "~/providers/filter-provider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resp = useQuery({
    queryKey: ["data"],
    queryFn: () => axios(RECORDS_FETCH_URL).then((res) => res.data),
    refetchOnWindowFocus: false,
  });

  return (
    <FilterProvider>
      <div
        className=" bg-white
      dark:bg-gray-900
        box-border h-screen min-h-screen w-full overflow-hidden grid grid-cols-12"
      >
        {/* Nav */}
        <NavBar className="col-span-2 " />
        {/* Main */}
        <div className="flex flex-col col-span-10 h-full ">
          <Header title="" onSubmit={() => {}} />
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 ">
            <div className="border shadow-sm rounded-lg p-2">
              <div className="relative w-full  overflow-auto">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </FilterProvider>
  );
}
