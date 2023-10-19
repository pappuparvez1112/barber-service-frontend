import { authOptions } from "@/app/lib/AuthOption";
import NavBar from "@/components/ui/NavBar/NavBar";
import { getServerSession } from "next-auth";

const UserHeader = async () => {
  const items = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "Appointment", href: "/my-appointment" },
    { key: "3", label: "Contact", href: "/contact-us" },
    { key: "4", label: "Services", href: "/services" },
    { key: "5", label: "Dashboard", href: "/dashboard" },
  ];
  const session = await getServerSession(authOptions);
  return <NavBar session={session ? true : false} items={items} />;
};

export default UserHeader;
