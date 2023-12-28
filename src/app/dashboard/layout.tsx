"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RECORDS_FETCH_URL } from "~/common/config";
import Searchbar from "~/components/Molecules/searchbar";
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
        <NavBar />

        {/* Main */}
        <div className="flex flex-col col-span-12 sm:col-span-10">
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
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 ">
            {/* Container */}
            <div className="border shadow-sm rounded-lg p-2">
              <div className="relative w-full overflow-auto">
                {children}
                {/* <Table
                  isFetching={resp.isFetching}
                  error={resp.error}
                  data={resp.data}
                /> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </FilterProvider>
  );
}
