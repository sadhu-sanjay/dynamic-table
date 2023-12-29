"use client";
import { useState } from "react";
import CreateDocButton from "~/components/Atoms/create-doc-button";
import DeleteButton from "~/components/Atoms/delete-button";
import Searchbar from "~/components/Molecules/searchbar";
import DocAddIcon from "~/icons/doc-add-icon";
import { SpeakerIcon } from "~/icons/speaker-icon";
import Tabs, { TabItem } from "~/components/Molecules/tab";
import data from "~/data/data.json";

export default function Proposals() {
  const items = [
    { label: "Ongoing", value: "ongoing" },
    { label: "Approved", value: "approved" },
    { label: "Rejected", value: "rejected" },
  ];

  const [activeTab, setActiveTab] = useState(items[0]);

  return (
    <div className="bg-white dark:bg-slate-800 p-4">
      <div className="flex flex-col gap-4">
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

        <div className="flex justify-between">
          <Tabs
            items={items}
            className="bg-gray-50"
            activeTab={activeTab}
            onChange={(item: TabItem) => setActiveTab(item)}
          />

          <div className="flex gap-2 items-center">
            <Searchbar onSubmit={(value) => console.log(value)} className="" />
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-gray-200 text-gray-600">
              Sort
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-gray-200 text-gray-600">
              Filter
            </button>
          </div>
        </div>
        <div className="flex gap-4 my-4 flex-wrap ">
          {Array.from(data).map((element, i) => (
            <div
              key={i}
              className="rounded-lg text-card-foreground shadow-md hover:scale-105 transition-transform 
              w-[290px]
            bg-slate-100 border border-slate-200
            dark:bg-slate-800 dark:border-slate-700"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
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
              <div className="p-6">
                <div
                  className={`text-center text-xl font-bold ${
                    i % 2 == 0
                      ? "text-green-600 dark:text-green-400 "
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {i % 2 == 0 ? "REJECTED" : "APPROVED"}
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
