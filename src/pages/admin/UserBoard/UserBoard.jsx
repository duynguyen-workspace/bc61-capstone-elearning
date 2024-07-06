import React, { useEffect, useState } from "react";
import { getUsersApi } from "../../../api/users.api";
import "./userBoard.scss"

import { Divider, Space, Switch, Table, Tag } from "antd";
const columnsInfo = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Basic Info",
        dataIndex: "info",
        key: "info",
        render: (info) => {
            return <div className="flex justify-start items-center gap-x-3">
                <i className="fa-solid fa-user-graduate text-4xl"></i>
                <div>
                    <h1 className="text-lg font-semibold">{info.name}</h1>
                    <p>{info.email}</p>
                </div>
            </div>
        }
    },
    {
        title: "Username",
        dataIndex: "taiKhoan",
        key: "username",
    },
    {
        title: "Courses",
        dataIndex: "coursesEnrolled",
        key: "course",
        render: (number) => number || <p className="text-lg text-center">15</p>
    },
    {
        title: "Comments",
        dataIndex: "comments",
        key: "comments",
        render: (number) => number || <p className="text-lg text-center">15</p>
    },
    {
        title: "Reviews",
        dataIndex: "reviews",
        key: "reviews",
        render: (number) => number || <p className="text-lg text-center">15</p>
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "Status",
        render: (status) => status || <span>
            <Switch checkedChildren="active" unCheckedChildren="disabled" defaultChecked />
        </span>
    },
    {
        title: "Role",
        dataIndex: "maLoaiNguoiDung",
        key: "role",
        render: (role) => {
            let color = role === "HV" ? "green" : "geekblue";
            let roleName = role === "HV" ? "Student" : "Educator";
            // "volcano"

            return (
                <span>
                    <Tag color={color} key={role}>
                        {roleName.toUpperCase()}
                    </Tag>
                </span>
            );
        },
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <i className="fa-solid fa-pen-circle text-sky-700 text-4xl"></i>
                <i class="fa-solid fa-circle-trash text-red-600 text-4xl"></i>
            </Space>
        ),
    },
];

const columns = columnsInfo.map((col) => ({...col, "className": "text-md"}))

const UserBoard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsersApi()
            .then((res) => {
                let userList = res.map((user, index) => {
                    return { ...user, 'id': index + 1, 'info': {'name': user.hoTen, 'email': user.email} };
                });
                setUsers(userList);
            })
            .catch((err) => console.log("error: ", err));
    }, []);

    // console.log("users: ", users)

    return (
        <section className="user-board px-10">
            <div className="flex gap-x-3 items-center">
                <h2 className="text-5xl font-bold">User Dashboard</h2>
                <p className="text-slate-600 text-lg">{`${users.length} total`}</p>
            </div>
            <Divider></Divider>
            <div className="user-table py-3">
                <Table
                    columns={columns}
                    pagination={{
                        position: ["bottomCenter"],
                        pageSize: 10,
                        showSizeChanger: false
                        
                    }}
                    dataSource={users}
                />
            </div>
            
        </section>
    );
};

export default UserBoard;
