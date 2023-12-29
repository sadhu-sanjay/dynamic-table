"use client";
import { Table } from "~/components/sections/table";
import { useQuery } from "@tanstack/react-query";
import { RECORDS_FETCH_URL } from "~/common/config";
import axios from "axios";
import { FilterProvider } from "~/providers/filter-provider";
import filtersData from "~/data/FilterData";
import TableHeader from "~/components/Organisms/table-header";
import Proposals from "./proposals/page";
filtersData.sort((a, b) => a.order - b.order);

export default function Dashboard() {
  const resp = useQuery({
    queryKey: ["data"],
    queryFn: () => axios(RECORDS_FETCH_URL).then((res) => res.data),
    refetchOnWindowFocus: false,
  });

  return (
    <>
    <Proposals />
    </>
  );
}
