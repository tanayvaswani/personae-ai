import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  agentId: string;
  agentName: string;
  onEdit: () => void;
  onRemove: () => void;
}

export const AgentIdViewHeader = ({
  agentId,
  agentName,
  onEdit,
  onRemove,
}: Props) => {
  return (
    <div className="flex items-center justify-between">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={"/agents"}>My Agents</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRightIcon className="text-foreground text-xl font-medium [&>svg]:size-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/agents/${agentId}`}>{agentName}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
