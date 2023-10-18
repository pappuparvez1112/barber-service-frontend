"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { onSidebarClose } from "@/redux/slices/sidebarSlice";
import { Drawer, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = ({
  children,
  items,
}: {
  children: React.ReactNode;
  items: {
    key: string;
    label: string;
    href: string;
  }[];
}) => {
  const open = useAppSelector((state) => state.sidebar.open);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  return (
    <Layout className="flex-row">
      <Sider width={250} className="min-h-screen bg-gray-300 lg:block hidden">
        <Menu
          className="bg-transparent px-3 py-1"
          disabledOverflow
          theme="light"
          mode="inline"
          selectedKeys={[items.find((item) => item.href === pathname)?.key!]}
        >
          {items.map((item) => {
            return (
              <Menu.Item key={item.key}>
                <Link href={item.href} className="">
                  {item.label}
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Content
        className="p-4"
        style={{ padding: "0 24px", minHeight: 280, backgroundColor: "#fff" }}
      >
        {children}
      </Content>
      <Drawer
        className="lg:hidden"
        title="SideBar"
        placement="left"
        onClose={() => dispatch(onSidebarClose())}
        open={open}
      >
        <Menu
          disabledOverflow
          theme="light"
          mode="vertical"
          selectedKeys={[items.find((item) => item.href === pathname)?.key!]}
        >
          {items.map((item) => {
            return (
              <Menu.Item key={item.key}>
                <Link href={item.href} className="">
                  {item.label}
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Drawer>
    </Layout>
  );
};

export default SideBar;
