"use client";
import { useEffect, useState } from "react";
import CreateDocButton from "~/components/Atoms/create-doc-button";
import DeleteButton from "~/components/Atoms/delete-button";
import Searchbar from "~/components/Molecules/searchbar";
import DocAddIcon from "~/icons/doc-add-icon";
import { SpeakerIcon } from "~/icons/speaker-icon";
import Tabs, { TabItem } from "~/components/Molecules/tab";
import { data } from "~/data/data";
import SortButton from "~/components/Atoms/sort-button";
import FilterButton from "~/components/Atoms/filter-button";
import LoadingCircle from "~/icons/loading-circle";
import IconCircleUser from "~/icons/circle-user";
import CircleIcon from "~/icons/circle-icon";
import LiveButton from "~/components/Atoms/live-button";
import { LIVE_EVENTS_URL } from "~/common/config";

export default function Proposals() {
  const [liveNumber, setLiveNumber] = useState("9999");

  useEffect(() => {
    const evtSource = new EventSource(LIVE_EVENTS_URL, {
      withCredentials: false,
    });

    evtSource.onmessage = (event) => {
      console.log(`message: ${event.data}`);
    };

    evtSource.onopen = (event) => {
      console.log("EVENT SOURCE OPEN", event);
    };

    evtSource.addEventListener("ping", (e) => {
      console.log("PING EVENT TRIGGERED", e.data);
      const number = JSON.parse(e.data);
      setLiveNumber(number);
    });

    evtSource.onerror = (event) => {
      console.log("EVENT SOURCE ERROR", event);
    };

    return () => {
      evtSource.close();
    };
  }, []);

  const items: Array<TabItem> = [
    { label: "Ongoing", value: "ongoing", count: 0 },
    { label: "Approved", value: "approved", count: 0 },
    { label: "Rejected", value: "rejected", count: 0 },
    { label: "Draft", value: "draft", count: 0 },
  ];

  items.forEach((item) => {
    item.count = data.filter((element) => {
      return element.status?.toLowerCase() === item.value.toLowerCase();
    }).length;
  });

  const [filteredData, setFilteredData] = useState(data);
  const [activeTab, setActiveTab] = useState(items[2]);

  const filterData = (searchText: string, status: string) => {
    const filtered = data.filter((element) => {
      const titleMatch = element.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const statusMatch =
        element.status?.toLowerCase() === status.toLowerCase();
      return titleMatch && statusMatch;
    });

    setFilteredData(filtered);
  };

  const getStatusTextColor = (status: string): string => {
    if (status === "approved") {
      return "text-green-600 dark:text-green-400";
    } else if (status === "ongoing") {
      return "text-yellow-600 dark:text-yellow-400";
    } else if (status === "rejected") {
      return "text-red-600 dark:text-red-400";
    } else if (status === "draft") {
      return "text-gray-600 dark:text-gray-400";
    } else {
      return "text-red-600 dark:text-red-400";
    }
  };

  return (
    <div className=" bg-gray-100 rounded-4px dark:bg-slate-800 flex flex-col gap-4 p-5 border h-full w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-baseline gap-2 ">
          <h1 className="text-3xl font-bold">Proposals</h1>
          <div className="text-sm text-gray-500">Collingwood Magpies</div>
        </div>
        <div className="flex gap-4">
          <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 text-white flex items-center gap-2">
            <SpeakerIcon />
            Announcement
          </button>
          <CreateDocButton
            title="New Proposal"
            className="my-0"
            onClick={() => {}}
          />
        </div>
      </div>

      <div className="flex justify-between ">
        <Tabs
          items={items}
          className="bg-gray-50"
          activeTab={activeTab}
          onChange={(item: TabItem) => {
            setActiveTab(item);
            filterData("", item.value);
          }}
        />

        <div className="flex gap-2 items-center">
          <div className="flex items-center w-full space-x-3 md:w-auto">
            <Searchbar onSubmit={(text) => filterData(text, activeTab.value)} />
            <SortButton onClick={() => {}} />
            <FilterButton onClick={() => {}} />
          </div>
          {/* <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-gray-200 text-gray-600">
            Sort
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-gray-200 text-gray-600">
            Filter
          </button> */}
        </div>
      </div>
      <div className="flex gap-4 flex-wrap overflow-x-visible overflow-y-scroll py-4">
        {filteredData.map((element, i) => (
          <div
            key={element.id}
            className="rounded-lg text-card-foreground shadow-md hover:scale-105 transition-transform 
              w-[290px] h-[260px]
              flex flex-col justify-between 
            bg-slate-100 border border-slate-200
            dark:bg-slate-800 dark:border-slate-700"
            data-v0-t="card"
          >
            <div className=" flex flex-col space-y-1.5 p-6">
              <h3
                className="text-xl font-semibold leading-none tracking-tight
              text-slate-900 dark:text-slate-50 shadow-sm dark:shadow-slate-700 "
              >
                {element.name}
              </h3>
              <p className="text-sm bg-slate-200 text-zinc-700 px-2 py-1 inline-block rounded">
                {element.context ?? "ON-FIELD DECISION"}
              </p>
            </div>
            <div className="p-6 bg-gray-200/30 dark:bg-gray-700">
              <div
                className={`text-center text-xl font-bold ${getStatusTextColor(
                  element.status
                )}`}
              >
                {element.status?.toUpperCase()}
              </div>
              <div className="flex justify-between items-center">
                <div className="text-right text-xs text-gray-500 dark:text-gray-400">
                  1 min ago
                </div>
                <div className="border-2 border-gray-600 rounded-full px-2 py-1 flex items-center gap-2 text-left text-xs text-gray-500 dark:text-gray-400">
                  <div
                    className={`text-left text-xs  ${element.live ? 'animate-ping text-red-500' : 'text-green-500'} `}
                  >
                    <CircleIcon />
                  </div>
                  <div className="text-xs font-semibold text-gray400 dark:text-gray-400">
                    {element.live ? liveNumber : "STABLE"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
