"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { RECORDS_FETCH_URL } from "~/common/config";
import Header from "~/components/Organisms/header";
import NavBar from "~/components/Organisms/nav-bar";
import { FilterProvider } from "~/providers/filter-provider";
import navData from "~/data/nav-data";

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

  const [selectedNav, setSelectedNav] = useState("proposals");

  return (
    <FilterProvider>
      <div
        className="container bg-white
      dark:bg-gray-900 
        box-border h-screen min-h-screen w-full grid grid-cols-12"
      >
        <NavBar navData={navData} className="col-span-2 " />
        <div className="main flex flex-col col-span-10 overflow-hidden">
          <Header title="Proposals" onSubmit={() => {}} />
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 overflow-hidden ">
            {/* <div className="subContainer border shadow-sm rounded-lg overflow-auto"> */}
            {children}
            {/* </div> */}
          </main>
        </div>
      </div>
    </FilterProvider>
  );
}
