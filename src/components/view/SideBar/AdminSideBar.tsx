import SideBar from "@/components/ui/SideBar/SideBar";

const AdminSideBar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Admins", href: "/admins" },
    {
      key: "2",
      label: "Create Category",
      href: "/admins/services/create-category/create",
    },
    {
      key: "3",
      label: "Create Services",
      href: "/admins/services/create-service",
    },
    { key: "4", label: "Manage Services", href: "/admins/services" },
    { key: "5", label: "Manage Review", href: "/admins/reviews" },
  ];
  return <SideBar items={items}>{children}</SideBar>;
};

export default AdminSideBar;
