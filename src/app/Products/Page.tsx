"use client";
import { Table } from "~/components/sections/table";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { RECORDS_FETCH_URL } from "~/common/config";
import { useEffect } from "react";
import axios from "axios";
import { Customer } from "~/scratchpad";

export default function Products() {
  const query = useQuery({
    queryKey: ["data"],
    queryFn: () => fetch(RECORDS_FETCH_URL).then((res) => res.json()),
  });

  return (
    <>
      <Table data={query.data} search pagination />
    </>
  );
}
