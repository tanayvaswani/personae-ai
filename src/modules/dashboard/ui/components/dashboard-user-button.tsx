import { authClient } from "@/lib/auth-client";

export const DashboardUserButton = () => {
  const { data, isPending } = authClient.useSession();

  return <div></div>;
};
