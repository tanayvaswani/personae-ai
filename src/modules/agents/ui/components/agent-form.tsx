"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { agentsInsertSchema } from "../../schema";
import { useTRPC } from "@/trpc/client";
import { AgentGetOne } from "../../types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import GeneratedAvatar from "@/components/generated-avatar";

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
      onSuccess: async () => {
        await queryClient.invalidateQueries(trpc.agents.getMany.queryOptions());

        if (initialValues?.id) {
          await queryClient.invalidateQueries(
            trpc.agents.getOne.queryOptions({ id: initialValues.id })
          );
        }

        onSuccess?.();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    })
  );

  const form = useForm<z.infer<typeof agentsInsertSchema>>({
    resolver: zodResolver(agentsInsertSchema),
    defaultValues: {
      name: initialValues?.name ?? "",
      instructions: initialValues?.instructions ?? "",
    },
  });

  const isEdit = !!initialValues?.id;
  const isPending = createAgent?.isPending;

  const onSubmit = (values: z.infer<typeof agentsInsertSchema>) => {
    if (isEdit) {
      //
    } else {
      //
    }
  };

  return (
    <Form {...form}>
      <form className="" onSubmit={form.handleSubmit(onSubmit)}>
        <GeneratedAvatar
          seed={form.watch("name")}
          variant={"botttsNeutral"}
          className="border size-16"
        />
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder={"Tanay Vaswani"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="instructions"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructions</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={
                    "Write a set of instruction(s) for your agent to follow..."
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between gap-2">
          {onCancel && (
            <Button
              variant={"ghost"}
              type={"button"}
              disabled={isPending}
              onClick={() => onCancel()}
            >
              Cancel
            </Button>
          )}
          <Button variant={"default"} type={"submit"} disabled={isPending}>
            {isEdit ? "Update" : "Create"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
