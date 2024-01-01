import React, { createContext, useContext, useEffect, useState } from "react";
import { LIVE_EVENTS_URL } from "~/common/config";

// Create a context for the live number
export const LiveNumberContext = createContext(0);

// Create a provider component
export const LiveNumberProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [liveNumber, setLiveNumber] = useState(0);

  // Move the event source logic here
  useEffect(() => {
    const evtSource = new EventSource(LIVE_EVENTS_URL, {
      withCredentials: false,
    });

    evtSource.onmessage = (event) => {
      console.log("event.data", event.data);
      setLiveNumber(event.data);
    };
    return () => evtSource.close();
  }, []);

  return (
    <LiveNumberContext.Provider value={liveNumber}>
      {children}
    </LiveNumberContext.Provider>
  );
};

export default LiveNumberProvider;
