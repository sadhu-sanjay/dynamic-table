"use client";
import { Table } from "~/components/Organisms/table";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ITALY_VIEW_URL } from "~/common/config";
import { useEffect } from "react";
import axios from "axios";

export default function Products() {
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetch(ITALY_VIEW_URL).then((res) => res.json()),
  });

  return (
    <>
      <Table data={query.data} search pagination />
    </>
  );
}
