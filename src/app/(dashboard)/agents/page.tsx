import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

import { getQueryClient, trpc } from "@/trpc/server";

import { AgentsView, AgentsViewLoading } from "@/modules/agents/ui/agents-view";

const Page = () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.agents.getMany.queryFilter());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<AgentsViewLoading />}>
        <AgentsView />
      </Suspense>
    </HydrationBoundary>
  );
};

export default Page;
