"use client";

import { useState } from "react";

import { useAgentsFilters } from "../../hooks/use-agents-filters";
import { AgentsSearchFilters } from "./agents-search-filter";
import { Button } from "@/components/ui/button";
import { NewAgentDialog } from "@/modules/agents/ui/components/new-agent-dialog";

export const AgentsListHeader = () => {
  const [filters, setFilters] = useAgentsFilters();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <>
      <NewAgentDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="py-4 px-3 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl">My Agents</h5>
          <Button onClick={() => setIsDialogOpen(true)}>New Agent</Button>
        </div>
        <div className="flex items-center gap-x-2 p-1">
          <AgentsSearchFilters />
        </div>
      </div>
    </>
  );
};
