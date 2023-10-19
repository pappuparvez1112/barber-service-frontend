"use client";

// import { deleteDoctor } from "@/services/doctors/delete-doctor";
import { SmallDashOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";
import Link from "next/link";

// const handleDelete = async (id: string) => {
//   await deleteDoctor(id);
// };

const getDropdownMenuItems = (id: string): MenuProps["items"] => [
  {
    key: "1",
    label: <Link href={`/admin/manage-user/${id}`}>Detail</Link>,
  },
  {
    key: "2",
    label: <Link href={`/admin/services/${id}/update`}>Edit</Link>,
  },
  {
    key: "3",
    label: <span>Delete</span>,
    onClick: () => {
      console.log(id);
      // handleDelete(id);
    },
  },
];

export const columns = [
  {
    title: "ID No",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "FullName",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "ContactNo",
    dataIndex: "contactNo",
    key: "contactNo",
  },

  {
    title: "Action",
    key: "action",
    render: (record: any) => {
      const items = getDropdownMenuItems(record.id);
      //   console.log(record);
      return (
        <Dropdown
          placement="bottomLeft"
          overlayClassName="min-w-[150px]"
          menu={{
            items: items,
          }}
        >
          <Button>
            <SmallDashOutlined />
          </Button>
        </Dropdown>
      );
    },
  },
];
