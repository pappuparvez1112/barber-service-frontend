import { authOptions } from "@/app/lib/AuthOption";
import NavBar from "@/components/ui/NavBar/NavBar";
import { getServerSession } from "next-auth";

const SuperAdminHeader = async () => {
  const items = [
    { key: "1", label: "SuperAdmin", href: "/super_admin" },
    { key: "2", label: "My Profile", href: "/super_admin/my-profile" },
    { key: "3", label: "Dashboard", href: "/super_admin/dashboard" },
    {
      key: "4",
      label: "Create Admin",
      href: "/super_admin/admin/create-admin",
    },
  ];
  const session = await getServerSession(authOptions);
  return <NavBar session={session ? true : false} items={items} />;
};

export default SuperAdminHeader;
