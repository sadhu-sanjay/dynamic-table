"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import IconBxsDashboard from "~/icons/dashboard-icon";
import Popover from "~/components/layouts/popover";
import Image from "next/image";
import { Session } from "next-auth";
import { LogoutIcon } from "~/icons/logout-icon";

export default function UserDropdown({ session }: { session: Session }) {
  const { email, image } = session?.user || {};
  const [openPopover, setOpenPopover] = useState(false);

  if (!email) return null;

  return (
    <div className="relative inline-block text-left">
      <Popover
        content={
          // <div className="w-full rounded-md bg-white dark:bg-gray-800 p-2 sm:w-56">
          <div
            className=" z-10 inline-block w-64 text-sm text-gray-500 transition-opacity 
            duration-300 bg-white border-gray-200 rounded-lg shadow-sm 
            dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 p-2 "
          >
            <div className="p-3">
        <div className="flex items-center justify-between mb-2">
            <a href="#">
                <Image width={40} height={40} className="w-10 h-10 rounded-full" src={image || `https://avatars.dicebear.com/api/micah/${email}.svg`} alt="Jese Leos"/>
            </a>
            <div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Follow</button>
            </div>
        </div>
        <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="#">{session?.user?.name}</a>
        </p>
        <p className="mb-3 text-sm font-normal">
            <a href="#" className="hover:underline"> {session?.user?.email}</a>
        </p>
        <p className="mb-4 text-sm"> Building Software at <a href="https://sanjaygoswami.online" className="text-blue-600 dark:text-blue-500 hover:underline">sanjaygoswami.online</a>.</p>
        <ul className="flex text-sm">
            <li className="me-2">
                <a href="#" className="hover:underline">
                    <span className="font-semibold text-gray-900 dark:text-white">799</span>
                    <span>Following</span>
                </a>
            </li>
            <li>
                <a href="#" className="hover:underline">
                    <span className="font-semibold text-gray-900 dark:text-white">3,758</span>
                    <span>Followers</span>
                </a>
            </li>
        </ul>
    </div>
    <div data-popper-arrow></div>
            {/* <div className="p-2">
              {session?.user?.name && (
                <p className="truncate text-sm font-medium text-gray-900">
                  {session?.user?.name}
                </p>
              )}
              <p className="truncate text-sm text-gray-500">
                {session?.user?.email}
              </p>
            </div> */}
            {/* <button
              className="relative flex w-full cursor-not-allowed items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
              disabled
            >
              <IconBxsDashboard className="h-4 w-4" />
              <p className="text-sm">Dashboard</p>
            </button> */}
            <button
              className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
              onClick={() => signOut()}
            >
              <LogoutIcon className="h-4 w-4" />
              <p className="text-sm">Logout</p>
            </button>
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9"
        >
          <Image
            alt={email}
            src={image || `https://avatars.dicebear.com/api/micah/${email}.svg`}
            width={40}
            height={40}
          />
        </button>
      </Popover>
    </div>
  );
}
