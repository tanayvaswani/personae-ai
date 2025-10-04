import { ReactNode, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandResponsiveDialog,
} from "./ui/command";
import {} from "@/components/ui/select";
import { ChevronsUpDownIcon } from "lucide-react";

interface Props {
  options: Array<{
    id: string;
    value: string;
    children: ReactNode;
  }>;
  onSelect: (value: string) => void;
  onSearch?: (value: string) => void;
  value: string;
  placeholder?: string;
  isSearchable?: string;
  className?: string;
}

const CommandSelect = ({
  options,
  onSelect,
  onSearch,
  value,
  placeholder = "Select an option",
  isSearchable,
  className,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOptions = options.find((option) => option.value === value);

  return (
    <>
      <Button
        type={"button"}
        variant={"outline"}
        className={cn(
          "h-9 justify-between font-normal px-2",
          selectedOptions ?? "text-muted-foreground",
          className
        )}
      >
        <div>{selectedOptions?.children ?? placeholder}</div>
        <ChevronsUpDownIcon className="size-4" />
      </Button>

      <CommandResponsiveDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder={"Search..."} onValueChange={onSearch} />
        <CommandList>
          <CommandEmpty>
            <span className="text-muted-foreground text-sm">
              No options found
            </span>
          </CommandEmpty>
          {options.map((option) => (
            <CommandItem
              key={option.id}
              onSelect={() => {
                onSelect(option.value);
                setIsOpen(false);
              }}
            >
              {option.children}
            </CommandItem>
          ))}
        </CommandList>
      </CommandResponsiveDialog>
    </>
  );
};

export default CommandSelect;
