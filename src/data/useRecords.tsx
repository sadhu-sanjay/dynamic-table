import { useCallback, useState } from "react";
import { DropdownOption, Record } from "~/models/types";
import { RECORDS_FETCH_URL } from "~/common/config";

export default function useRecords() {
  const [records, setRecords] = useState<Record[]>([]);
  const [isLoadingRecords, setIsLoadingRecords] = useState(false);

  console.log("USE RECORDS RENDER");

  const fetchRecords = useCallback((selectedView: DropdownOption) => {
    setIsLoadingRecords(true);
    setRecords([]);

    try {
      const viewKey = selectedView?.value;
      if (!viewKey) {
        throw new Error("noKey");
      }
      const RECORDS_FETCH_URL_WITH_VIEW = `${RECORDS_FETCH_URL}?viewKey=${viewKey}`;

      fetch(RECORDS_FETCH_URL_WITH_VIEW)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((res) => {
          setRecords((prevRecords) => [...prevRecords, ...res]);
        })
        .catch((e) => {
          console.error("Error fetchRecords ==> ", e);
          setIsLoadingRecords(false);
        })
        .finally(() => {
          setIsLoadingRecords(false);
        });
    } catch (e: any) {
      console.log("catch Error::", e);
      setIsLoadingRecords(false);
    }
  }, []);

  return { isLoadingRecords, records, fetchRecords };
}
