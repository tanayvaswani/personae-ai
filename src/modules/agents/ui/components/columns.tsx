"use client";

import { ColumnDef } from "@tanstack/react-table";

import { AgentGetOne } from "../../types";

export const columns: ColumnDef<AgentGetOne>[] = [
  {
    accessorKey: "name",
    header: "Agent Name",
  },
];
 