import React, { useEffect, useState } from "react";
import { LIVE_EVENTS_URL } from "~/common/config";
import CircleIcon from "~/icons/circle-icon";

const LiveButton: React.FC = (className) => {
  const [liveNumbers, setLiveNumbers] = useState<number[]>([]);

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
    });

    evtSource.addEventListener("add", (e) => {
      console.log("ADD EVENT TRIGGERED", e.data);
      // const newRecords: Record[] = JSON.parse(e.data);
      // console.log("ADDED RECORDS", newRecords);

      // setRecords((prevRecords) => {
      //   return [...prevRecords, ...newRecords];
      // });
    });

    evtSource.addEventListener("update", (e) => {
      console.log("UPDATE EVENT TRIGGERED", e.data);
      // const updatedRecords: Record[] = JSON.parse(e.data);
      // console.log("UPDATED RECORDS", updatedRecords);

      // setRecords((prevRecords) => {
      //   const newRecords = prevRecords.map((each) => {
      //     const updatedRecord = updatedRecords.find(
      //       (record) => record.id === each.id
      //     );
      //     if (updatedRecord) {
      //       return updatedRecord;
      //     } else {
      //       return each;
      //     }
      //   });
      //   return newRecords;
      // });
    });

    evtSource.addEventListener("delete", (e) => {
      console.log("DELETE EVENT TRIGGERED", e.data);
      // const deletedRecordIds: string[] = JSON.parse(e.data);
      // setRecords((prevRecords) =>
      //   prevRecords.filter((each) => !deletedRecordIds.includes(each.id))
      // );
    });

    evtSource.addEventListener("data", (e) => {
      console.log("consuption", e);
    });

    evtSource.onerror = (event) => {
      console.log("EVENT SOURCE ERROR", event);
      evtSource.close();
    };

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
        {liveNumbers}
      </div>
    </div>
  );
};

export default LiveButton;
