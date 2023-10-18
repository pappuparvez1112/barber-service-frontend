import { authOptions } from "@/app/lib/AuthOption";
import NavBar from "@/components/ui/NavBar/NavBar";
import { getServerSession } from "next-auth";

const AdminHeader = async () => {
  const items = [
    { key: "1", label: "Admins", href: "/admins" },
    { key: "2", label: "My Profile", href: "/admins/my-profile" },
    { key: "3", label: "Dashboard", href: "/admins/dashboard" },
    { key: "4", label: "Create Admin", href: "/admins/create-admin" },
  ];
  const session = await getServerSession(authOptions);
  return <NavBar session={session ? true : false} items={items} />;
};

export default AdminHeader;
