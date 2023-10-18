"use client";
import { getAdminsData } from "@/app/utils/adminDataFetching";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";

import { useDebounced } from "@/redux/hooks";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import dayjs from "dayjs";
import Link from "next/link";

import { useState } from "react";

const AdminPage = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  // const { data, isLoading } = useAdminsQuery({});
  const data: any = getAdminsData();
  console.log(data);

  //   const [deleteDepartment] = useDeleteDepartmentMutation();
  const admins = data?.admins;
  // const meta = data?.meta;

  //   const deleteHandler = async (id: string) => {
  //     message.loading("deleting.....");
  //     try {
  //       await deleteDepartment(id);
  //       console.log(data);

  //       message.success("Department updated successfully");
  //     } catch (err: any) {
  //       console.error(err.message);
  //       message.error(err.message);
  //     }
  //   };

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "FullName",
      dataIndex: "fullName",
    },
    {
      title: "Contact no.",
      dataIndex: "contactNo",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D,YYY hh:mm A");
      },
    },
    {
      title: "Action",

      render: function (data: any) {
        return (
          <>
            <Link href={`/super_admin/department/edit/${data?.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button onClick={() => console.log(data)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };
  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />
      <ActionBar title="Admin List">
        <Input
          type="text"
          size="large"
          placeholder="Search...."
          style={{ width: "20%" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div>
          <Link href="/super_admin/admin/create-admin">
            <Button type="primary">Create</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              onClick={resetFilters}
              type="primary"
              style={{ margin: "0px 5px" }}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <UMTable
        // loading={isLoading}
        columns={columns}
        dataSource={admins}
        pageSize={size}
        // totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default AdminPage;
