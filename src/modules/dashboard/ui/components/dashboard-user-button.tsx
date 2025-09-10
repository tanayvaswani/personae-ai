import { authClient } from "@/lib/auth-client";

export const DashboardUserButton = () => {
  const { data, isPending } = authClient.useSession();

  if (isPending || !data?.user) {
    return null;
  }

  return <div></div>;
};
