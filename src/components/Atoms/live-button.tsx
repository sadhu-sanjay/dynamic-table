import React, { createContext, useContext, useEffect, useState } from "react";
import { LIVE_EVENTS_URL } from "~/common/config";
import { DocType } from "~/data/doc-data";
import CircleIcon from "~/icons/circle-icon";
import LiveNumberProvider, {
  LiveNumberContext,
} from "../../providers/live-event-provider";

type LiveButtonProps = {
  className?: string;
  doc: DocType;
};

const LiveButton: React.FC<LiveButtonProps> = ({ className, doc }) => {
  const liveNumber = useContext(LiveNumberContext);

  return (
    <div className="border-2 border-gray-600 rounded-full px-2 py-1 flex items-center gap-2 text-left text-xs text-gray-500 dark:text-gray-400">
      <div
        className={`text-left text-xs  ${
          doc.live ? "animate-ping text-red-500" : "text-green-500"
        } `}
      >
        <CircleIcon />
      </div>
      <div className="text-xs font-semibold text-gray400 dark:text-gray-400">
        {doc.live ? Number(liveNumber) * doc.id : "STABLE"}
      </div>
    </div>
  );
};

export default LiveButton;
