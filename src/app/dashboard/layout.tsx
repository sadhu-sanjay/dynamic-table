export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex bg-gray-100 dark:bg-gray-800">
        <aside
          className=" z-40 w-full sm:w-2/12 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0  dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidenav"
          id="drawer-navigation"
        >
          <div className="flex items-center justify-between h-14 px-4 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center">
              <button
                aria-label="Toggle sidenav"
                className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 md:hidden"
                id="sidenav-toggle"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 5C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H3ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H3ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z"
                  ></path>
                </svg>
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
