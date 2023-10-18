import SuperAdminHeader from "@/components/view/Header/SuperAdminHeader";
import SuperAdminSideBar from "@/components/view/SideBar/SuperAdminSidebar";

const SuperLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SuperAdminHeader />
      <SuperAdminSideBar> {children}</SuperAdminSideBar>
    </div>
  );
};

export default SuperLayout;
