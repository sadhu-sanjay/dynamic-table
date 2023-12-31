"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RECORDS_FETCH_URL } from "~/common/config";
import TableHeader from "~/components/Organisms/table-header";
import { Table } from "~/components/sections/table";
import { FilterProvider } from "~/providers/filter-provider";

export default function Orders() {

  const resp = useQuery({
    queryKey: ["data"],
    queryFn: () => axios(RECORDS_FETCH_URL).then((res) => res.data),
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <FilterProvider>
        <TableHeader />
        <Table
          isFetching={resp.isFetching}
          error={resp.error}
          data={resp.data}
        />
      </FilterProvider>
    </>
  );
}
