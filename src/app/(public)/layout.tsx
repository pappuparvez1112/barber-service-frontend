import PublicHeader from "@/components/view/Header/PublicHeader";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" md:container md:mx-auto ">
      <PublicHeader />
      {children}
    </div>
  );
};

export default PublicLayout;
