import UserHeader from "@/components/view/Header/UserHeader";
import UserSideBar from "@/components/view/SideBar/UserSideBar";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <UserHeader />
      <UserSideBar>{children}</UserSideBar>
    </div>
  );
};

export default UserLayout;
