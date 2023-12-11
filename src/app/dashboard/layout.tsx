"use client";
import { useState } from "react";
import TableHeader from "~/components/Organisms/table-header";
import { Table } from "~/components/sections/table";
import FeedbackIcon from "~/icons/feedback-icon";
import IconHome from "~/icons/icon-home";
import IconSettings from "~/icons/icon-settings";
import IconUsers from "~/icons/icon-users";
import LoadingCircle from "~/icons/loading-circle";
import MeterIcon from "~/icons/meter-icon";
import { FilterProvider } from "~/providers/filter-provider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <FilterProvider>
      <div className="grid h-[100dvh] min-h-screen w-full ">{children}</div>
    </FilterProvider>
  );

  return (
    <>
      <div className="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex flex-col gap-2">
            <div className="flex h-[60px] items-center px-6">
              <a className="flex items-center gap-2 font-semibold" href="#">
                <MeterIcon />
                <span className="">Admin Dashboard</span>
              </a>
            </div>
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
                  <FeedbackIcon />
                  Feedback
                  <div className="border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    20
                  </div>
                </a>
                <a
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <IconUsers />
                  Users
                </a>
                <a
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <IconSettings />
                  Settings
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <a className="lg:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6"
              >
                <path d="m12 14 4-4"></path>
                <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
              </svg>
              <span className="sr-only">Dashboard</span>
            </a>
            <div className="flex-1">
              <h1 className="font-semibold text-lg">User Feedback</h1>
            </div>
            <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
              <form className="ml-auto flex-1 sm:flex-initial">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <input
                    className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
                    placeholder="Search feedback..."
                    type="search"
                  />
                </div>
              </form>
              <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    AB
                  </span>
                </span>
                <span className="sr-only">Toggle user menu</span>
              </button>
            </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            {children}
            {/* <div className="border shadow-sm rounded-lg p-2">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm mb-4"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    Feedback from User 1
                  </h3>
                </div>
                <div className="p-6">
                  <p>
                    Great application, really helped me manage my tasks better!
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm mb-4"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    Feedback from User 2
                  </h3>
                </div>
                <div className="p-6">
                  <p>
                    I would love to see more customization options in the next
                    update.
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm mb-4"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    Feedback from User 3
                  </h3>
                </div>
                <div className="p-6">
                  <p>
                    I found a bug in the chat feature, please fix it as soon as
                    possible!
                  </p>
                </div>
              </div>
            </div> */}
          </main>
        </div>
      </div>

      {/* <div className="flex bg-gray-100 dark:bg-gray-800">
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
      </div> */}
    </>
  );
}
