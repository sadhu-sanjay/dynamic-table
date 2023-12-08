"use client";
import { Table } from "~/components/sections/table";
import { useQuery } from "@tanstack/react-query";
import { RECORDS_FETCH_URL } from "~/common/config";
import axios from "axios";
import { FilterProvider } from "~/providers/filter-provider";
import { Field } from "~/models/field";
import filtersData from "~/data/FilterData";
filtersData.sort((a, b) => a.order - b.order);

export default function Products() {
  const resp = useQuery({
    queryKey: ["data"],
    queryFn: () => axios(RECORDS_FETCH_URL).then((res) => res.data),
    refetchOnWindowFocus: false,
  });

  return (
    <FilterProvider>
      <Table isFetching={resp.isFetching} error={resp.error} data={resp.data} />
    </FilterProvider>
  );
}
