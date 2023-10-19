import SideBar from "@/components/ui/SideBar/SideBar";

const UserSideBar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "My Booking", href: "/booking" },
    { key: "2", label: "My Profile Info", href: "/my-profile" },
    { key: "3", label: "Dashboard", href: "/dashboard" },
  ];
  return <SideBar items={items}>{children}</SideBar>;
};

export default UserSideBar;
