import AdminHeader from "@/components/view/Header/AdminHeader";
import AdminSideBar from "@/components/view/SideBar/AdminSideBar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminHeader />
      <AdminSideBar> {children}</AdminSideBar>
    </div>
  );
};

export default AdminLayout;
