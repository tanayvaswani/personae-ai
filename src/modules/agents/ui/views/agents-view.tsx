"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { columns } from "../components/columns";
import { getManyAgentsPreFetchQueryOptions } from "@/prefetch";
import { useTRPC } from "@/trpc/client";
import { DataTable } from "../components/data-table";
import { EmptyState } from "@/components/empty-state";
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.agents.getMany.queryOptions(getManyAgentsPreFetchQueryOptions)
  );

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable data={data.items} columns={columns} />

      {data.items.length === 0 && (
        <EmptyState
          title={"Create your first agent"}
          description={
            "Create an agent to join your meetings. Each agent will follow your instructions and can interact with participants during the call."
          }
        />
      )}
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
