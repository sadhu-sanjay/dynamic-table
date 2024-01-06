import Image from "next/image";

<div className="flex flex-col w-full min-h-screen bg-gray-100">
  <header className="flex items-center h-16 px-4 bg-white border-b dark:bg-gray-800 md:px-6">
    <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <a
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
        href="#"
      >
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
          className="w-6 h-6"
        >
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
        </svg>
        <span className="sr-only">Spa Admin</span>
      </a>
      <a className="font-bold" href="#">
        Dashboard
      </a>
      <a className="text-gray-500 dark:text-gray-400" href="#">
        Appointments
      </a>
      <a className="text-gray-500 dark:text-gray-400" href="#">
        Products
      </a>
      <a className="text-gray-500 dark:text-gray-400" href="#">
        Staff
      </a>
      <a className="text-gray-500 dark:text-gray-400" href="#">
        Customers
      </a>
    </nav>
    <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <form className="flex-1 ml-auto sm:flex-initial">
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
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            placeholder="Search..."
            type="search"
          />
        </div>
      </form>
      <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
        <Image
          src="/placeholder.svg"
          width="32"
          height="32"
          className="rounded-full"
          alt="Avatar"
          style={{ aspectRatio: 32 / 32, objectFit: "cover" }}
        />
        <span className="sr-only">Toggle user menu</span>
      </button>
    </div>
  </header>
  <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm"
        data-v0-t="card"
      >
        <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
          <h3 className="tracking-tight text-sm font-medium">Total Revenue</h3>
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
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
          >
            <line x1="12" x2="12" y1="2" y2="22"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
        <div className="p-6">
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            +20.1% from last month
          </p>
        </div>
      </div>
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm"
        data-v0-t="card"
      >
        <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
          <h3 className="tracking-tight text-sm font-medium">
            New Appointments
          </h3>
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
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
            <line x1="16" x2="16" y1="2" y2="6"></line>
            <line x1="8" x2="8" y1="2" y2="6"></line>
            <line x1="3" x2="21" y1="10" y2="10"></line>
          </svg>
        </div>
        <div className="p-6">
          <div className="text-2xl font-bold">+2350</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            +180.1% from last month
          </p>
        </div>
      </div>
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm"
        data-v0-t="card"
      >
        <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
          <h3 className="tracking-tight text-sm font-medium">Product Sales</h3>
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
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
          >
            <circle cx="8" cy="21" r="1"></circle>
            <circle cx="19" cy="21" r="1"></circle>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
          </svg>
        </div>
        <div className="p-6">
          <div className="text-2xl font-bold">+12,234</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            +19% from last month
          </p>
        </div>
      </div>
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm"
        data-v0-t="card"
      >
        <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
          <h3 className="tracking-tight text-sm font-medium">Active Staff</h3>
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
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <div className="p-6">
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            +201 since last hour
          </p>
        </div>
      </div>
    </div>
    <div>
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm"
        data-v0-t="card"
      >
        <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
          <h3 className="tracking-tight text-sm font-medium">
            Upcoming Appointments
          </h3>
          <a className="text-blue-500" href="#">
            See all
          </a>
        </div>
        <div className="p-6">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&amp;_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">
                    Date
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Time
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Customer
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Service
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="[&amp;_tr:last-child]:border-0">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                    12/12/2023
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    10:00 AM
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    John Doe
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    Massage
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-green-500">
                    Confirmed
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                    12/12/2023
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    11:00 AM
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    Jane Doe
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    Facial
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-yellow-500">
                    Pending
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                    12/12/2023
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    12:00 PM
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    John Smith
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    Manicure
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-red-500">
                    Cancelled
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>;
