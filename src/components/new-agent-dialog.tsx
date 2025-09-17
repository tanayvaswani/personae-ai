import { ResponsiveDialog } from "@/components/responsive-dialog";

interface NewAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NewAgentDialog = ({ open, onOpenChange }: NewAgentDialogProps) => {
  return (
    <ResponsiveDialog
      title="New Agent"
      description="Create New Agent"
      open={open}
      onOpenChange={onOpenChange}
    >
      New Agent Form
    </ResponsiveDialog>
  );
};
