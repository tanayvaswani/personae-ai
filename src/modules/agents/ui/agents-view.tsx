"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data, isLoading, isError } = useQuery(
    trpc.agents.getMany.queryOptions()
  );

  if (isLoading) {
    <div>Loading..</div>;
  }

  if (isError) {
    <div>Error!</div>;
  }

  return <div>{JSON.stringify(data, null, 2)}</div>;
};
