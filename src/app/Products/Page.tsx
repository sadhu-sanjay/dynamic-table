"use client";
import { Table } from "~/components/Organisms/table";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ITALY_VIEW_URL } from "~/common/config";
import { useEffect } from "react";

export default function Products() {
  // const queryClient = useQueryClient();

  // useEffect(() => {
  //   fetch(ITALY_VIEW_URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data:", data);
  //     });
  // }, []);

  // const query = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: () => fetch(ITALY_VIEW_URL).then((res) => res.json()),
  // });

  return (
    <>{/* <Table data={query.data} search={true} pagination={true} /> */}</>
  );
}
