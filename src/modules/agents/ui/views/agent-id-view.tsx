"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { AgentIdViewHeader } from "../components/agent-id-view-header";
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";

interface Props {
  agentId: string;
}

export const AgentIdView = ({ agentId }: Props) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.agents.getOne.queryOptions({ id: agentId })
  );

  return (
    <div className="flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-4">
      <AgentIdViewHeader
        agentId={agentId}
        agentName={data.name}
        onEdit={() => {}}
        onRemove={() => {}}
      />
      <div className="bg-background rounded-lg border">
        <div className="px-4 py-5 gap-y-5 flex flex-col col-span-5"></div>
      </div>
    </div>
  );
};

export const AgentIdViewLoading = () => {
  return (
    <LoadingState
      title={"Loading Agent"}
      description={"This may take a few seconds..."}
    />
  );
};

export const AgentIdViewError = () => {
  return (
    <ErrorState
      title={"Something Loading Agent"}
      description={"Please try again."}
    />
  );
};
