import React, { useEffect, useState } from "react";
import { LIVE_EVENTS_URL } from "~/common/config";
import CircleIcon from "~/icons/circle-icon";

const LiveButton: React.FC = (className) => {
  const [liveNumber, setLiveNumber] = useState<string>("");

  /**
   * Handle RealTime Events
   */
  useEffect(() => {
    console.log("EVENT SOURCE INITIATED", LIVE_EVENTS_URL);
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

    return () => {
      evtSource.close();
    };
  }, []);
  /**
   * Handle RealTime Events
   */

  return (
    <div className="border-2 border-gray-600 rounded-full px-2 py-1 flex items-center gap-2 text-left text-xs text-gray-500 dark:text-gray-400">
      {/* a text showing live status */}
      <div
        className={`text-left text-xs text-red-500 dark:text-red-400 animate-ping ${className}`}
      >
        <CircleIcon />
      </div>
      <div className="text-xs font-semibold text-gray400 dark:text-gray-400">
        {liveNumber}
        99
      </div>
    </div>
  );
};

export default LiveButton;
