import { AgentForm } from "./agent-form";
import { ResponsiveDialog } from "@/components/responsive-dialog";

interface UpdateAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const UpdateAgentDialog = ({
  open,
  onOpenChange,
}: UpdateAgentDialogProps) => {
  return (
    <ResponsiveDialog
      title="Update Agent"
      description="Update your Agent"
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  );
};
