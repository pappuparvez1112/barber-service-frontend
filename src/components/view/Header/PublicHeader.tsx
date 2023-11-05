import { authOptions } from "@/app/lib/AuthOption";
import NavBar from "@/components/ui/NavBar/NavBar";
import { getServerSession } from "next-auth";

const PublicHeader = async () => {
  const items = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "About", href: "/about-us" },
    { key: "3", label: "Contact", href: "/contact-us" },
    { key: "4", label: "Services", href: "/services" },
    { key: "5", label: "Dashboard", href: "/dashboard" },
  ];
  const session = await getServerSession(authOptions);
  return (
    <div className="container md:container sm:container sm:mx-auto  md:mx-auto navbar sm:fixed md:fixed lg:fixed z-10 bg-opacity-30 bg-black text-white ">
      <NavBar session={session ? true : false} items={items} />
    </div>
  );
};

export default PublicHeader;
