"use client";
import { Table } from "~/components/sections/table";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { RECORDS_FETCH_URL } from "~/common/config";
import { useEffect } from "react";
import axios from "axios";
import data from "~/../data.json";
import { FilterProvider } from "~/providers/filter-provider";

export default function Products() {
  const query = useQuery({
    queryKey: ["data"],
    queryFn: () => axios(RECORDS_FETCH_URL).then((res) => res.data),
  });

  return (
    <FilterProvider>
      <Table data={query.data} search pagination />
    </FilterProvider>
  );
}
