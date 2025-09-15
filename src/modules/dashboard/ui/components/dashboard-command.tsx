import { Dispatch, SetStateAction } from "react";

import {
  CommandResponsiveDialog,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface DashboardCommandProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DashboardCommand = ({ open, setOpen }: DashboardCommandProps) => {
  return (
    <CommandResponsiveDialog
      open={open}
      onOpenChange={setOpen}
      className="border-border"
    >
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
