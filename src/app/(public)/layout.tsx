import PublicHeader from "@/components/view/Header/PublicHeader";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PublicHeader />
      {children}
    </div>
  );
};

export default PublicLayout;
