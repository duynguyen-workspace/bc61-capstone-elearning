import React from "react";
import Sidebar from "../../components/Sidebar";
import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <Row className="">
            <Col span={4}>
                <Sidebar />
            </Col>
            <Col span={20}>
                <main className="w-full min-h-screen">
                    <Outlet />
                </main>
            </Col>
        </Row>
    );
};

export default AdminLayout;