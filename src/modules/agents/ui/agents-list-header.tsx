"use client";

import { Button } from "@/components/ui/button";

export const AgentsListHeader = () => {
  return (
    <div className="py-4 px-3 md:px-8 flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <h5 className="font-medium text-xl">My Agents</h5>
        <Button>New Agent</Button>
      </div>
    </div>
  );
};
