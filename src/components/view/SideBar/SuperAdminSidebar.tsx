import SideBar from "@/components/ui/SideBar/SideBar";

const SuperAdminSideBar = ({ children }: { children: React.ReactNode }) => {
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
  return <SideBar items={items}>{children}</SideBar>;
};

export default SuperAdminSideBar;
