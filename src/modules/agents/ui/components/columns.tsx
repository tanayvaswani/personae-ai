"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CornerDownRight } from "lucide-react";

import { AgentGetOne } from "../../types";

import GeneratedAvatar from "@/components/generated-avatar";

export const columns: ColumnDef<AgentGetOne>[] = [
  {
    accessorKey: "name",
    header: "Agent Name",
    cell: ({ row }) => (
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center gap-x-2">
          <GeneratedAvatar
            variant={"botttsNeutral"}
            seed={row.original.name}
            className="size-6"
          />
          <span className="font-semibold capitalize">{row.original.name}</span>
        </div>

        <div className="flex items-center gap-x-1.5">
          <CornerDownRight className="size-3 text-muted-foreground" />
          <span className="text-sm text-muted-foreground capitalize max-w-[200px] truncate">
            {row.original.instructions}
          </span>
        </div>
      </div>
    ),
  },
];
