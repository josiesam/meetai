import { SearchIcon } from "lucide-react";

import { Input } from "./ui/input";

import { useAgentsFilters } from "@/modules/agents/hooks/use-agents-filters";

export const AgentsSearchFilter = () => {
  const [filters, setFilter] = useAgentsFilters();

  return (
    <div className="relative">
      <Input
        placeholder="Filter by name"
        className="h-9 bg-white w-[200px] pl-7"
        value={filters.search}
        onChange={(e) => setFilter({ search: e.target.value })}
      />
      <SearchIcon className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
};
