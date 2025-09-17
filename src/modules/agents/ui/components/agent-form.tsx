"use client";

import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { useTRPC } from "@/trpc/client";
import { AgentGetOne } from "../../types";

import { agentsInsertSchema } from "../../schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface AgentFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
  initialValues?: AgentGetOne;
}

export const AgentForm = ({
  onSuccess,
  onCancel,
  initialValues,
}: AgentFormProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const trpc = useTRPC();

  const createAgent = useMutation(
    trpc.agents.create.mutationOptions({
      onSuccess: () => {},
      onError: () => {},
    })
  );

  const form = useForm<z.infer<typeof agentsInsertSchema>>({
    resolver: zodResolver(agentsInsertSchema),
    defaultValues: {
      name: "",
      instructions: "",
    },
  });

  return <div className=""></div>;
};
