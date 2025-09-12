"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export const HomeView = () => {
  const trpc = useTRPC();

  const { data } = useQuery(trpc.hello.queryOptions({ text: "Tanay" }));

  return (
    <div className="flex flex-col text-2xl w-full p-3">{data?.greeting}</div>
  );
};
