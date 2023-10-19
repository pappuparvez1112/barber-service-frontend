import SideBar from "@/components/ui/SideBar/SideBar";

const SuperAdminSideBar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "SuperAdmin", href: "/super_admin" },

    { key: "2", label: "Admin Info", href: "/super_admin/admin" },
    {
      key: "3",
      label: "Create Admin",
      href: "/super_admin/admin/create-admin",
    },
  ];
  return <SideBar items={items}>{children}</SideBar>;
};

export default SuperAdminSideBar;
