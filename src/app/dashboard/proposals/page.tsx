export default function Proposals() {
  const items = [""];

  return (
    <div className="bg-white dark:bg-slate-800 p-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Proposals</h1>
          <div className="flex gap-4">
            <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 text-white flex items-center gap-2">
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
                className="w-4 h-4"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                <line x1="12" x2="12" y1="8" y2="12"></line>
                <line x1="12" x2="12.01" y1="16" y2="16"></line>
              </svg>
              ANNOUNCEMENT
            </button>
            <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-purple-600 text-white flex items-center gap-2">
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
                className="w-4 h-4"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              NEW PROPOSAL
            </button>
          </div>
        </div>
        <div className="text-sm text-gray-500">Collingwood Magpies</div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary/80 h-10 px-4 py-2 bg-gray-200 text-gray-600">
              Ongoing (14)
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary/80 h-10 px-4 py-2 bg-gray-200 text-gray-600">
              Approved (4)
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-gray-200 text-gray-600">
              Rejected
            </button>
          </div>
          <div className="flex gap-2 items-center">
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
              className="text-gray-400"
            >
              <path d="M6 18h8"></path>
              <path d="M3 22h18"></path>
              <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
              <path d="M9 14h2"></path>
              <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
              <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
            </svg>
            <input
              className="border border-gray-300 rounded py-2 px-4"
              placeholder="Search"
            />
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-gray-200 text-gray-600">
              Sort
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-gray-200 text-gray-600">
              Filter
            </button>
          </div>
        </div>
        <div className="flex gap-4 my-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              className="rounded-lg text-card-foreground shadow-md hover:scale-105 transition-transform 
              w-[300px]
            bg-slate-100 border border-slate-200
            dark:bg-slate-800 dark:border-slate-700"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3
                  className="text-xl font-semibold leading-none tracking-tight
              text-slate-900 dark:text-slate-50 shadow-sm dark:shadow-slate-700 "
                >
                  Putting John Doe as the new Coach for the next season.
                </h3>
                <p className="text-sm bg-slate-200 text-zinc-700 px-2 py-1 inline-block rounded">
                  ON-FIELD DECISION
                </p>
              </div>
              <div className="p-6">
                <div
                  className={`text-center text-xl font-bold ${
                    i % 2 == 0
                      ? "text-green-600 dark:text-green-400 "
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {i % 2 == 0 ? "REJECTED" : "ACCEPTED"}
                </div>
                <div className="text-right text-xs text-gray-500 dark:text-gray-400">
                  1 min ago
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
