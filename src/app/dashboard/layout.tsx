"use client";
import { useState } from "react";
import IconCircleUser from "~/icons/circle-user";
import LoadingCircle from "~/icons/loading-circle";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="flex bg-gray-100 dark:bg-gray-800">
        <aside
          className={`${
            isDrawerOpen ? "w-full translate-x-0" : "-translate-x-full"
          }
          fixed z-10 h-screen w-full sm:w-2/12
          flex flex-col justify-between p-4
          border-r transition-transform -translate-x-full 
          bg-white border-gray-200 md:translate-x-0  dark:bg-gray-800 dark:border-gray-700`}
          aria-label="Sidenav"
          id="drawer-navigation"
        >
          <div className="grid gap-2 ">
            <div className="flex items-center space-x-2 rounded-lg px-2 py-4">
              <button
                aria-label="Toggle sidenav"
                className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 "
                id="sidenav-toggle"
              >
                <IconCircleUser />
              </button>
            </div>
            <div className="grid gap-1">
              <button
                aria-label="Toggle sidenav"
                className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 "
                id="sidenav-toggle"
              >
                <IconCircleUser />
              </button>
            </div>
          </div>
        </aside>

        <main className="h-[100dvh] w-full sm:w-10/12 bg-blue-800 flex flex-col justify-center items-center">
          {children}
        </main>
      </div>
      {/* <div className="bg-red-200 w-screen h-screen flex ">
        <div className="w-2/12 bg-red-900">Sanjay</div>
        <div className="w-11/12 bg-blue-900">Paper</div>
      </div> */}
    </>
  );
}
