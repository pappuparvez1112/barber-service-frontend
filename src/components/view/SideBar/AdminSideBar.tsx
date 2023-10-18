import SideBar from "@/components/ui/SideBar/SideBar";

const AdminSideBar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Admins", href: "/admins" },
    { key: "2", label: "My Profile", href: "/admins/my-profile" },
    { key: "3", label: "Dashboard", href: "/admins/dashboard" },
    { key: "4", label: "Create Admin", href: "/admins/create-admin" },
  ];
  return <SideBar items={items}>{children}</SideBar>;
};

export default AdminSideBar;
