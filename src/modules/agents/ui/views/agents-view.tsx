"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { DataTable } from "../components/data-table";
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { columns, Payment } from "../components/columns";

const mockData: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52g",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52h",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
];

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable data={mockData} columns={columns} />
    </div>
  );
};

export const AgentsViewLoading = () => {
  return (
    <LoadingState
      title={"Loading Agents"}
      description={"This may take a few seconds..."}
    />
  );
};

export const AgentsViewError = () => {
  return (
    <ErrorState
      title={"Something Loading Agents"}
      description={"Please try again."}
    />
  );
};
