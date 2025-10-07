import { Dispatch, SetStateAction } from "react";

import {
  CommandInput,
  CommandItem,
  CommandList,
  CommandResponsiveDialog,
} from "@/components/ui/command";

interface DashboardCommandProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DashboardCommand = ({ open, setOpen }: DashboardCommandProps) => {
  return (
    <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        className="border-border"
        placeholder="Find a meeting or agent..."
      />
      <CommandList>
        <CommandItem>Test1</CommandItem>
        <CommandItem>Test2</CommandItem>
      </CommandList>
    </CommandResponsiveDialog>
  );
};
