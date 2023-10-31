"use client";
import { useAppDispatch } from "@/redux/hooks";
import { showSidebarDrawer } from "@/redux/slices/sidebarSlice";
import { MenuOutlined } from "@ant-design/icons";
// import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { signOut } from "next-auth/react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useState } from "react";

const { Header } = Layout;

const NavBar = ({
  items,
  session,
}: {
  items: {
    key: string;
    label: string;
    href: string;
  }[];

  session?: boolean;
}) => {
  // console.log(session);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  return (
    <Layout className="sm:container layout justify-between">
      <Header className="flex items-center justify-between ">
        <Content className="flex gap-4 ">
          {/* redux use small device */}
          <Button
            onClick={() => dispatch(showSidebarDrawer())}
            type="primary"
            className="lg:hidden"
          >
            <MenuOutlined />
          </Button>

          <Link href="/">
            <Title className="text-white mb-0" level={3}>
              Barber Solution
            </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden"
          disabledOverflow
          theme="dark"
          mode="horizontal"
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

          {session ? (
            <Button type="primary" onClick={() => signOut()}>
              Sign out
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={() => {
                router.push("/login");
              }}
            >
              Sign In/Register
            </Button>
          )}
        </Menu>
        {/* small device */}
        <Button onClick={showDrawer} type="primary" className="lg:hidden">
          <MenuOutlined />
        </Button>

        <Drawer
          className="lg:hidden"
          title="Menu"
          placement="right"
          onClose={onClose}
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
      </Header>
    </Layout>
  );
};

export default NavBar;
