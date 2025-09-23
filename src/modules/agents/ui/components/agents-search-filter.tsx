import { SearchIcon } from "lucide-react";

import { useAgentsFilters } from "../../hooks/use-agents-filters";
import { Input } from "@/components/ui/input";

export const AgentsSearchFilters = () => {
  const [filters, setFilters] = useAgentsFilters();

  return (
    <div className="relative">
      <Input
        placeholder={"Filter by name"}
        className={"h-9 bg-muted-foreground w-[200px] pl-7"}
        value={filters.search}
        onChange={(event) => setFilters({ search: event.target.value })}
      />
      <SearchIcon className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
};
